import serve from 'micro-core';
import api from "./lib";

/*
This micro service assumes a mongo database running in a docker container, that has had sample data inserted into it.
See scripts folder for methods of inserting sample data.

To test:
npm run build
npm start

To get the records of the Cartoon Johnny Bravo:
curl -X GET http://localhost:3000 -d '{"Name":"Johnny Bravo"}'



*/
serve(api).listen(3000, err => {
  if (err) throw err;
  console.log("Listening on *:3000");
});