let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }


  let sentence = "";

  for(let y in details){
    sentence += " " + y + " " + details[y];
  }

  console.log(sentence.trim());