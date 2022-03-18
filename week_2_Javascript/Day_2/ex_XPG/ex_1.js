lingo = prompt('What language do you speak? ');
lingo_t = lingo.trim();
lingo_l = lingo_t.toLowerCase();
console.log(lingo_l);


switch (lingo_l){
    case 'french':
        console.log('Bonjour');
        break;
    
    case 'english':
        console.log('Hello');
        break;

    case 'hebrew':
        console.log('Shalom');
        break;
    default:
        console.log('01110011 01101111 01110010 01110010 01111001');

}