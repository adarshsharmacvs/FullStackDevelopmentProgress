## The process of installing docker, using it and to establish a client server connection to MONGO
## Basics of MONGO DB

The first step is to start the docker terminal and then either that terminal or other CLI such as Git Bash could be used to interact with docker.

To confirm if the docker is running or not, some basic commands could be used such as
<ul>
<li>
<b>1) docker version</b>
</li><li>
<b>2) docker info</b>
</li>
</ul>
To see the list of running containers the command is 
<li>
<b>docker ps</b>
</li>
To install Mongo DB with the docker quickstart running type the command:
<li><b>
docker run --name my-mongo -d mongo:3.4.18-jessie
</b></li>
it will install the specified version of mongo db with the instance name my-mongo

Now to connect this instance with another instance, i.e the current Mongo Db instance will work as server and in another instance of CLI another mongo db will act as client to communicate to the server

start another instance of the CLI and type in the command:
<li>
<b>
docker run -it --link my-mongo:mongo --rm mongo mongo --host mongo test
</b>
</li>

this windows will work as the client version which will communicate to the server.

Now the client could create an object or database on the server becuase it has some basic authorities which will allow him to create the database objects.

To do so:
<ul>
<li>
<b>
Create a database and insert some records
</b>

<li>
<b> > use tvseries; <br>
switched to db tvseries
</li>

> db.action.insert( 
<br>{
<br> name: "Game of Thrones",
<br> imbd: 9,
<br> seasons: 7,
<br> years: [2011,2017]
<br> }
<br> );
</br>
</b>


To insert another record

> db.action.insert( 
<br>{
<br> name: "The Flash",
<br> imbd: 7,
<br> seasons: 5,
<br> years: [2014,2019]
<br> }
<br> );
</br>
</b>

To find a particular record for example where the name is The Flash:
<br>
<b>db.action.find({name:"The Flash"});</b>
</br>

We could also use logical operation such as "and", "or" to find the result:
<b>
db.action.find({$or:[{name:"Game of Thrones"}, {firstName:"The Flash"}]});
</b>

Removing the document is same as finding them
<b>
db.action.remove({name:"Game of Thrones"});<br>
Output : WriteResult({ "nRemoved" : 2 })
</b>