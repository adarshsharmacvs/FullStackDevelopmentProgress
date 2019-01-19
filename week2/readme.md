## The process of installing docker, using it and to establish a client server connection to MONGO
## Basics of MONGO DB

The first step is to start the docker terminal and then either that terminal or other CLI such as Git Bash could be used to interact with docker.

To confirm if the docker is running or not, some basic commands could be used such as
1) docker version
2) docker info

To see the list of running containers the command is 
docker ps

To install Mongo DB with the docker quickstart running type the command
docker run --name my-mongo -d mongo:3.4.18-jessie
it will install the specified version of mongo db with the instance name my-mongo

Now to connect this instance with another instance, i.e the current Mongo Db instance will work as server and in another instance of CLI another mongo db will act as client to communicate to the server

start another instance of the CLI and type in the command:
docker run -it --link my-mongo:mongo --rm mongo mongo --host mongo test

this windows will work as the client version which will communicate to the server.

Now the client could create an object or database on the server becuase it has some basic authorities which will allow him to create the database objects.

To do so:
Create a database and insert some records


use entertainment;
db.actors.insert(
    {
        firstName: "John",
        lastName: "Travolta",
        age: 40,
        tags: ["dancer", "singer", "actor"],
        description: {
            height: "5'4",
            weight: "200lbs"
        }
    }
)


To insert another record

db.actors.insert(
    {
    firstName: "Uma",
        lastName: "Thurman",
        age: 30,
        sex: "female",
        tags: ["dancer", "singer", "actor"],
        description: {
            height: "5'4",
            weight: "130lbs"
        }
    }
)

To find a particular record for example where the first name is john:

db.actors.find({firstName:"John"});


We could also use logical operation such as "and", "or" to find the result:

db.actors.find({$or:[{firstName:"John"}, {firstName:"Uma"}]});

Removing the document is same as finding them

db.actors.remove({firstName:"John"});