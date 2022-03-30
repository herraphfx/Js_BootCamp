const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

   //create an array of username
   let usernames = [];
   gameInfo.forEach((element)=> {
        usernames.push((element.username) + "!");
        
   });

   let result = [];
   gameInfo.forEach((elem)=> elem.score > 5 ? result.push(elem) : console.log('hi') );
    console.log(result);

    let scores = 0;
    gameInfo.forEach((e)=>{
        scores = scores + (e.score)
    })

