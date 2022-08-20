//alert("Hello World");

/*var test;
test="Hello world";
var test1="Hi!!!";
alert(test1);
alert(test);*/

/*var num = 5;
num = num + 1;
alert(num);*/

/*var num = 5;
num += 1;
alert(num);*/

/*var num = 5;
num++;
alert(num);*/

/*var num = 5;

alert(num++);
alert(++num);*/

/*var text1="Hello";
var text2="World";

console.log(text1+text2);

var text1="Hello";
var text2=" World";

console.log( text1 + text2 );

var text1="Hello";
var text2=5;

console.log(text1+text2);

var text1="Hello";
var text2=5;

console.log(text1+text2+5);

var text1="Hello";
var text2=5;

console.log(text1+(text2+5));*/

/*var user=prompt("What is your name?");

console.log("Hello " + user);*/


/*var num=prompt("What is your fav num?");            //prompt takes only string value

console.log(5 + num);*/

/*var num=+prompt("What is your fav num?"); 

console.log(5 + num);*/

/*var num=prompt("What is your fav num?");            //something related to parsing (search later)
num=parse.int(num);
console.log(5 + num);*/

/*var num=prompt("What is your fav num?"); 
num=Number(num);
console.log(5 + num);*/

//var num=+prompt("What is your fav num?"); 

//console.log(num===5);

/*if (num % 2 === 0) 
{
    console.log("This is an even number!");
}
else
{
    console.log("This is an odd number!");
}*/

/*for (var i=0 ; i<=99 ; i++)
{
    console.log("This is from loop " + i);
}*/

/*var table=prompt("Enter a no. ");

for (var i=1; i <=10; i++)
{
    console.log(table + "x" + i + "=" + table*i);      //prompt changes to integer cause multiplication
}*/

/*for (i=1 ; i<=5 ; i++)
{
    var star="" ;
    for (j=1 ; j<=i ; j++)
    {
        star=star + "* ";
    }
    console.log(star);
}*/

/*var a = "java";
a = a.toUpperCase();
console.log(a);*/

/*var str = "This is a string";
var str1 = str.slice(10, 16);
console.log(str1);*/

/*var str="tum kutte kutte ho";                 indexOf()   lastIndexOf()
str=str.replace("kutte","ache");
console.log(str);*/

// math.round()    math.ceil()      math.floor()

/*var num = Math.round(Math.random() * 100);
console.log(num);*/

/*var num = Math.round(Math.random() * 10);

var guess = +prompt("Guess the no. ");

if(num === guess)
{
    alert("Correct!");
}
else
{
    alert("Try Again!")
}*/

function expandLoris(){
    var slowLoris = document.getElementById("slowLoris");
    slowLoris.innerText = "This is new text.";
}



