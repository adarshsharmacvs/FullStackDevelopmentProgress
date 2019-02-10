///import dependencies
import serve from "micro-core";
import api from "./lib";

/*
This micro service assumes a mongo database running in a docker container, that has had sample data inserted into it.
See scripts folder for methods of inserting sample data.

To test:
npm run build
npm start

curl -X GET http://localhost:8080 -d '{"Name":"Johnny"}'

*/


///serve the api

serve(api).listen(3000, err => {
    if (err) throw err;
    console.log("Listening on *:3000");
  });