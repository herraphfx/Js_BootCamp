grade = prompt("What is your grade? ");

grade_1 = grade.trim();

if(grade_1 >= 90 ){
    console.log('A');
}
else if (grade_1 >= 80 < 90){
    console.log('B');
}
else if(grade_1 >=70 <80){
    console.log('C');
}
else if(grade_1 < 70 ){
    console.log('D');
}