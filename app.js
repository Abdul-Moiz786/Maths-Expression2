// --------------------------Q#01------------------------------
var a=10;
document.write("<h3>Result</h3>");
document.write("The value of a is: "+a);
document.write("<br>------------------------------");
++a;
document.write("<br>The value of ++a is: "+a);
document.write("<br><br>The value of a++ is: "+a++);
document.write("<br>Now The value of a is: "+a);

document.write("<br><br>The value of --a is: "+--a);
document.write("<br>Now The value of a is: "+a);

document.write("<br><br>The value of a-- is: "+a--);
document.write("<br>Now The value of a is: "+a);

// --------------------------Q#02------------------------------
var a,b;
a=2,b=1;
var result=--a - --b + ++b + b--;
document.write("<br><br>--a; is: 1")
document.write("<br>--a - --b; is: 1")
document.write("<br>--a - --b + ++b; is: 2")
document.write("<br>--a - --b + ++b + b--; is: 3")
document.write("<br>Result is: "+result)

// --------------------------Q#03------------------------------
var name=prompt("Enter your name","Abdul Moiz");
document.write("<br><br> Hello! Nice to see you: "+"<b>"+name+"</b>");

// --------------------------Q#05------------------------------
var tableNo=+prompt("Enter any number to print its Table","5");
var i=1;
document.write("<br><br>"+"Table of "+tableNo+":");
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);
++i;
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);
++i;
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);
++i;
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);
++i;
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);
++i;
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);
++i;
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);
++i;
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);
++i;
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);
++i;
var tableAns=tableNo*i;
document.write("<br>&nbsp;"+tableNo+" * "+i+"="+tableAns);

// --------------------------Q#05------------------------------
var subjectName1=prompt("Enter Subject name:","Maths");
var subjectName2=prompt("Enter Subject name:","Physics");
var subjectName3=prompt("Enter Subject name:","Chemistry");
var obtMarks1=+prompt("Enter "+subjectName1+" Marks:");
var obtMarks2=+prompt("Enter "+subjectName2+" Marks:");
var obtMarks3=+prompt("Enter "+subjectName3+" Marks:");
var totalMarks1=100;
var totalMarks2=100;
var totalMarks3=100;
var grandTotal=totalMarks1+totalMarks2+totalMarks3;
var obtainedMarks=obtMarks1+obtMarks2+obtMarks3;
var per1=(obtMarks1/totalMarks1)*100;
var per2=(obtMarks2/totalMarks2)*100;
var per3=(obtMarks3/totalMarks3)*100;
var perFinal=(per1+per2+per3)/3;
document.write("</br></br><h3>Percentage Calculator</h3>")
document.write("<table border=2 cellpadding=5 cellspacing=3><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+subjectName1+"</td><td>"+totalMarks1+"</td><td>"+obtMarks1+"</td><td>"+per1+"%"+"</td></tr><tr><td>"+subjectName2+"</td><td>"+totalMarks2+"</td><td>"+obtMarks2+"</td><td>"+per2+"%"+"</td> </tr><tr><td>"+subjectName3+"</td> <td>"+totalMarks3+"</td><td>"+obtMarks3+"</td> <td>"+per3+"%"+"</td> </tr> <tr><td><td>"+"<b>"+grandTotal+"<b>"+"</td><td>"+"<b>"+obtainedMarks+"<b>"+"</td><td>"+"<b>"+perFinal+"%"+"</b>"+"</td></tr></table>")
