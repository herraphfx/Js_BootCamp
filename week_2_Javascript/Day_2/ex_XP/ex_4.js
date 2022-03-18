let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "henry"];

if(users.length == 0){
    console.log("No one is online");
}
else if(users.length == 1){
    user_1 = users[0] ;
    console.log(user_1 + " is online");
}
else if(users.length == 2){
    user_1 = users[0];
    user_2 = users[1];
    console.log(user_1 + ' and ' + user_2 + ' are online');
}
else if(users.length > 2){
   user_1 = users[0];
   user_2 = users[1];
   remusers = users.splice(2);
   console.log(remusers);
   console.log(user_1 + ' ,' +user_2 + ' and ' + remusers.length + ' are online.');
}