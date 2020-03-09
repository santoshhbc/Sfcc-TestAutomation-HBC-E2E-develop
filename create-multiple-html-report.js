const report = require('multiple-cucumber-html-reporter');
var shell = require('shelljs');
const uuidv1 = require('uuid/v1');
var uniqueId = uuidv1();
var jsonDirPath = 'reports/' + process.argv[2] + '/';
var reportDirPath = 'reports/' + process.argv[2] + '/' + uniqueId;
var MY_SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL); 

report.generate({
    jsonDir: jsonDirPath,
    reportPath: reportDirPath,
    reportName: 'Nightwatch',
      saveCollectedJSON : false,
      pageFooter : '<div class="created-by"><p>&copy; 2019 Created by Team Totoro</p></div>',
      displayDuration : true,
      metadata:{
        browser: {
            name: 'chrome',
            version: '75.0'
        },
        device: '',
        platform: {
            name: 'Linux',
            version: '7.6'
        } 
    },
    customData: {
        title: "Nightwatch Automation",
        data: [
          { label: "Project", value: "Nightwatch Core Regression" },
          { label: "Release", value: "2.0" },
        ]
    }
});

var copyCommand = './copyFileToNetStorage.sh ' + process.argv[2] + ' ' + uniqueId;
shell.exec(copyCommand);

var slack_notification;
if(uniqueId !== null && uniqueId !== ''){
    slack_notification = 'view ' + process.argv[2] + ' ' + 'reports at \n' +
                         'http://qa-content.hbc.com/totoro/core/' +
                          process.argv[2] + '/' + uniqueId + '/' + 'index.html'
} else {

    slack_notification = 'There is an issue running the automation scripts , please rerun the scripts'
}
var channelName;
if(process.argv[2] === 'saks-stqa') {
    channelName = '#saks_stqa_environment';
} else if(process.argv[2] === 'o5a-stqa') {
    channelName = '#off5th_stqa_env';
} else if(process.argv[2] === 'saks-prod') {
    channelName = '#production-saks';
} else if(process.argv[2] === 'o5a-prod') {
    channelName = '#production-off5th';
} else if(process.argv[2] === 'saks-prev') {
    channelName = '#saks_preview_env';
} else if(process.argv[2] === 'o5a-prev') {
    channelName = '#off5th_preview_env';
} 
 
 slack.send({
    channel: channelName,
    icon_url: 'https://emoji.slack-edge.com/T3JNHJ6GN/totoro/1636318ca03a8e94.png',
    text: slack_notification,
    username: 'Smoketest notification'
  });