////insert data into our running mongodb (running in container)
const MongoClient = require("mongodb").MongoClient;
const DBName = "The90sCartoons";

//note authentication via url
//this should be replaced with environment variables (for security)
const url = `mongodb://192.168.99.100:27017/${DBName}`;

/*
Note:
This example assumes mongo running in a Docker container, from a standard docker mongo image.
docker run --name my-mongo -it -p 27017:27017 mongo:3.4.18-jessie

Use 'docker-machine env' to figure out the IP of your host network, and be sure to forward port 27017
*/

const CartoonData = [
  {
    Name: "The Simpsons",
    Genre: "Comedy",
    FirstEpisode: "December 17, 1989",
    Cast: ["Hank Azaria","Harry Sheare","Dan"],
    Ratings: [{"imbd":{ "Rating": 8.7}, "TotalRaters": 326353 }, 
    {"tv":{ "Rating": 9.1}, "TotalRaters": 426653 }, 
    {"ratinggraph":{ "Rating": 8.9}, "TotalRaters": 28369 }],
    SimilarSeries:["FamilyGuy", "Futurama", "American Dad", "The Critic"]
  },
  {
    Name: "Johnny Bravo",
    Genre: "Comedy",
    FirstEpisode: "March 26, 1995",
    Cast: ["Jeff Bennet","Brenda Vacardo","Mae Whitman"],
    Ratings: [{"imbd":{ "Rating": 7.3}, "TotalRaters": 32633 }, 
    {"tv":{ "Rating": 8.9}, "TotalRaters": 906653 }, 
    {"ratinggraph":{ "Rating": 8.7}, "TotalRaters": 47832 }],
    SimilarSeries:["Dexter's Laboratory", "Cow And Chicken", "I am weasel", "What a Cartoon!"]
  },
  {
    Name: "The Powerpuff Girls",
    Genre: "Comedy",
    FirstEpisode: "November 18, 1998",
    Cast: ["Elizabeth Daily","Tara Strong","Roger L jackson"],
    Ratings: [{"imbd":{ "Rating": 7.3}, "TotalRaters": 64544 }, 
    {"tv":{ "Rating": 8.4}, "TotalRaters": 75655 }, 
    {"ratinggraph":{ "Rating": 8.9}, "TotalRaters": 34543 }],
    SimilarSeries:["Adventure Time", "Samurai Jacks", "Ben 10", "Teen Titans"] 
  },
  {
    Name: "SpongeBob SquarePants",
    Genre: "Comedy",
    FirstEpisode: "May 1, 1999",
    Cast: ["Tom Kenny","Clancy Brown","Mr. Lawrence"],
    Ratings: [{"imbd":{ "Rating": 8.1}, "TotalRaters": 982292 }, 
    {"tv":{ "Rating": 8.5}, "TotalRaters": 837360 }, 
    {"ratinggraph":{ "Rating": 9.1}, "TotalRaters": 28272 }],
    SimilarSeries:["Rocko's Modern Life", "Cat Dog", "hey Arnold!", "The Fairly Odd Parents"] 
  }
];
//connect call returns a connection promise, which can be 'then' with a callback
MongoClient.connect(url)
  .then(con => {
    // <- callback
    console.log("Connected");
    return con
      .db("The90sCartoons")
      .collection("Cartoons")
      .insertMany(CartoonData)
      .then(out => console.log(out))
      .then(() => con.close());
  })
  .catch(err => {
    //if anything fails in the stack above, it will be caught here, stack stops
    console.log(err); //check for authentication fail?
  });