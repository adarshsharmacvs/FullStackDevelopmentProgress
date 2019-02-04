<h1>##Example of Micro-Service Asyn API </h1>
<h2>##Steps for running the Application (Assuming node is already installed) <h2>
</br>
<ul>
<li> Start docker and run mongodb
<li> Install all the dependancies defined in the package.json
<li> There is a js file called sampledata.js in the scripts folder, run the sampledata.js so that the running version of mongodb in the docker will have some records using Git bash/cmd
<li> npm run build (Git bash/cmd)
<li> npm start (Git bash/cmd)
<li> Now that the port 3000 is running we have to use another CMD to query mongodb
<li> In another prompt we could query the mongodb, using curl
<li> example: curl -X GET http://localhost:3000 -d '{"Name":"Johnny Bravo"}'
</ul>

