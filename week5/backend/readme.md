## Back End Service 

include instructions for launching container based on mongo

### Docker instructions 

Make sure your mongo is running in a container, using the follwoing commands.

`docker run --name my-mongo -it -p 27017:27017 mongo:<tag>`

### Depnedencies 

All Dependencies can be installed with the follwing command

`npm install`

## Running the node app

You will need to know the IP of docker network. This can be determied by running the following command

`docker-machine env`

Look for the IP starting in 192.

Update the index.js to use this IP.