## <h1>Monolithic APIs Basics</h1>

<ul>
<li>
The first step that needs to be done is to run <b>npm init</b> and istall the mongo db and express package.
</li>
<li>
We could run query <b>docker ps -a</b> to list the latest created containers, which should include the docarised container we created in <b>week5</b>. 
</li>
<li>Next we will run this container <b>docker run -it --name my-mongo 
    -p 27017:27017 
	docker_conatiner_name</b></li>
<li> The localhost will run on the port specified during week5 </li>
<li>
Next we will create two folder as <b>routes</b> and <b>models</b>. We also would create two files as <b>Dockerfile</b> and <b>.dockerignore</b> file for dockerizing the application.
</li>
<li>
    To get started on the server we will makes some changes in index.js i.e. the entry point of the application.
</li>
<li>In Index.js we will have reference to express and routes which acts as middleware.
Routes are middleware which are used to determine the queries we run against Database. Here we establish connection with Mongo Db, then start listening to our API server.</li>
</ul>

##<h2> Routes </h2>

<ul>
<li>Next we create a <b>route.js</b> file inside the Router folder we created earlier.</li>
<li>This file will be called everytime the application recives a request.</li>
<li>router.js interacts with mongodb, so before we interact with the data we need to store some data in that.</li>
<li>apart from retreiving records we also need to update and delete records, we could use models for that purpose.</li>
</ul>
##<h2>Models</h2>
Here we create an object with properties matching the records in the database.

##<h2>Dockerizing the application</h2>

<ul><li>
The last and final step is to docerize the application.
</li>
<li>run <b>$ docker build -t username/node_monolithic_api .</b></li>
<li>After it's build we could launch the image similary as we did during week5 as <b>$ docker run --link my-mongo:my-mongo -p 8080:8080 -d username/node_monolithic_api</b></li>
<li>TO see the output we could go to the browser and hit <b>http://192.168.99.100/api/instructors/all</b> this will hit the route.js and get the records if present else no document found.</li>
</ul>
