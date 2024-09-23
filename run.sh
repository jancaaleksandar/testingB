aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 523929395981.dkr.ecr.eu-west-1.amazonaws.com
docker build --platform linux/arm64 -t testingb .
docker tag testingb:latest 523929395981.dkr.ecr.eu-west-1.amazonaws.com/testingb:latest
docker push 523929395981.dkr.ecr.eu-west-1.amazonaws.com/testingb:latest