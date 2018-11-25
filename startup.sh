#!/bin/bash

echo "---------pull source----------"
git pull
cd ..

echo "---------remove contailer-----------"

docker rm -f mynginx

echo "------------remove image-------------"

docker rmi -f nginx:v1

echo "----------------create image-----------------"

docker build -t nginx:v1 .

echo "---------------start container---------------"

docker run --restart=always --name mynginx -p 80:80 -d nginx:v1

echo ">>>>>>done<<<<<<<<<"