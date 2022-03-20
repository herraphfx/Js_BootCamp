names = prompt("Enter the name ");

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  for(let guest in guestList){
      if(names.includes('randy' || 'karla' || 'wendy' || 'norman' || 'sam' == true))
      console.log("Hi I'm "+ guest + " and I'm from "+ guestList[guest]);
      else{
          console.log("Hi! I'm a guest");
      }
  }

