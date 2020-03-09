FROM sd1pgo01lx.saksdirect.com/rhel7_2:4

#Install FTP
RUN yum -y install ftp

#Install Java
RUN yum -y install java-1.8.0-openjdk-devel

#Extracting the nodejs from the source
RUN curl -sL https://rpm.nodesource.com/setup_10.x -o nodejs.sh | bash -

#Extracts required nodejs packages
RUN sh nodejs.sh

#Install node.js
RUN yum -y install nodejs

#Setting the workdir
WORKDIR /opt/nightwatch/app

#Copy Package.json onto workdir
ADD package.json/ /opt/nightwatch/app

#Install NPM
RUN npm install

#Copy application onto workdir
COPY ./ /opt/nightwatch/app

#Run tests
#CMD ["npm", "run", "test"]

#Store report into netstorage
#CMD ["sh", "-c", "SMOKETEST_BANNER=$SMOKETEST_BANNER npm run nightwatch -- bay/tests/features/bay_account.feature; ./sendFileToNetStorage.sh $SMOKETEST_BANNER $GO_PIPELINE_COUNTER $GO_STAGE_COUNTER"]
# CMD ["sh", "-c", "SMOKETEST_BANNER=o5a npm run regression-test -- bm/common_features/checkout/guestOrder_shipBill_payment_shipMethod.feature; node create-multiple-html-report.js $SMOKETEST_BANNER"]

CMD ["sh", "-c", "npm run test; node create-multiple-html-report.js $SMOKETEST_BANNER"]