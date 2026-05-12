 var studentGrade =function(marks){
    let grade;
    if(marks >= 90){
        grade = 'A';
    }
    else if(marks >= 80){
        grade = 'B';
    }
    else if(marks >= 35){
        grade = 'D';
    }
    else{
        grade = 'F';
    }
       return grade;
 }

 console.log(studentGrade(95));
 console.log(studentGrade(85));
 console.log(studentGrade(50));
 console.log(studentGrade(20));