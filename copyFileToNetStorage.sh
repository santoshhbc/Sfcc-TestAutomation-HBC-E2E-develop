#!/bin/bash
HOST='hbcdata.ftp.upload.akamai.com'
USER='Totoro'
PASSWD='testAkaTec2019'


echo view $1 dashboard report at: http://qa-content.hbc.com/totoro/core/$1/$2/index.html

cd reports/$1
ftp -inv $HOST << EOT
ascii
user $USER $PASSWD
cd /848655/core/$1
mkdir $2
cd $2
mput *.json
bye
EOT

cd $2
ftp -inv $HOST << EOT
ascii
user $USER $PASSWD
cd /848655/core/$1/$2
mput index.html
bye
EOT

cd features
ftp -inv $HOST << EOT
ascii
user $USER $PASSWD
cd /848655/core/$1/$2
mkdir features
cd features
mput *.html
bye
EOT

cd ../assets/css
ftp -inv $HOST << EOT
ascii
user $USER $PASSWD
cd /848655/core/$1/$2
mkdir assets
cd assets
mkdir css
cd css
mput *
bye
EOT

cd ../fonts
ftp -inv $HOST << EOT
ascii
user $USER $PASSWD
cd /848655/core/$1/$2/assets
mkdir fonts
cd fonts
mput *
bye
EOT

cd ../js
ftp -inv $HOST << EOT
ascii
user $USER $PASSWD
cd /848655/core/$1/$2/assets
mkdir js
cd js
mput *
bye
EOT