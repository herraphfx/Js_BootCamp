

function getBold_items(){
   let allBoldItems = document.getElementsByTagName('strong');  
  
    for(i=0; i < allBoldItems.length; i++){
        allBoldItems[i].addEventListener('mouseover', highlight);
   
   allBoldItems[i].addEventListener('mouseout', return_normal);
    }





   function return_normal(){
    let allBoldItems = document.getElementsByTagName('strong');
    for(i=0; i <allBoldItems.length; i++){
        allBoldItems[i].style.color ='black';
    }
    
}
return_normal();


function highlight(){
    let allBoldItems = document.getElementsByTagName('strong');
    for(i=0; i < allBoldItems.length; i++){
     allBoldItems[i].style.color = 'blue';
     console.log(allBoldItems);
    }
    
   
} 
highlight();


 }
getBold_items();






