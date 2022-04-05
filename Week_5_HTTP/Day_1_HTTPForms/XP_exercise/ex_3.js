let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }


  //Convert to JSON
  let json_convert = JSON.stringify(marioGame);
  console.log(json_convert);

//Convert it to pretty version
  let json_convert_pretty = JSON.parse(json_convert, null, 4);
  console.log(json_convert_pretty);


