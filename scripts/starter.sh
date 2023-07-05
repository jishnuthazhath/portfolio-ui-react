#!/bin/bash


if which node > /dev/null
    then
        echo 'node is installed'
        node --version
    else
        echo 'node is not install. Aborting the setup. Please install node to continue.'
        exit 1
    fi

if which git > /dev/null
    then
        echo 'git is installed'
        git --version
    else
        echo 'git is not install. Aborting the setup. Please install node to continue.'
        exit 1
    fi


echo 'Fetching new changes'
git pull


if which npm > /dev/null
    then
        echo 'npm is installed'
        npm --version
    else
        echo 'npm is not install. Aborting the setup. Please install node to continue.'
        exit 1
    fi

echo 'updating npm dependencies'
npm install --production

echo 'building the project'
npm run build

if which pm2 > /dev/null
    then
        echo 'pm2 is installed'
        pm2 --version
    else
        echo 'pm2 is not install. Aborting the setup. Please install node to continue.'
        exit 1
    fi

echo 'starting the application'
pm2 start --name "jishnuthazhath" "npm run start-ssh"
