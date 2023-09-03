# portfolio-ui-react

This is my portfollio website made with nextjs

## Problems I faced.

Problem : node does not have access to bind port 443
Solution:
"sudo setcap 'cap_net_bind_service=+ep' `which node`"

## Build dokcer image

# Steps to create and push image to docker hub

1. create the image from docker file.
   $ docker build --platform linux/amd64 -t jishnu1995/jishnuthazhath:latest .

2. login to dockerhub

   $ docker login

3. push the image to dockerhub

certificate location in local machine

# COPY /Users/jishnu/Dev/certificates/jishnuthazhath.dev/privkey.pem /etc/jishnuthazhath/

# COPY /Users/jishnu/Dev/certificates/jishnuthazhath.dev/fullchain.pem /etc/jishnuthazhath/

# commands server

$ sudo docker pull jishnu1995/jishnuthazhath:latest

$ sudo docker run -v /etc/jishnuthazhath:/etc/jishnuthazhath -p 443:443 --name jishnuthazhath -d jishnu1995/jishnuthazhath
