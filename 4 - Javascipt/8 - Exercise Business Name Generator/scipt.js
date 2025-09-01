console.log("this is ranodm busniness name generator")

let result=Math.random();
let first, second,third;

if(result<0.33)
{
    first="Cazy";
}
else if (result>0.33 && result<0.66)
{
    first="Amazing";
}
else
{
    first="Fire";
}

result=Math.random();

if(result<0.33)
{
    second="Garments"
}
else if (result>0.33 && result<0.66)
{
    second="Engine";
}
else
{
    second="food"
}

result=Math.random();

if(result<0.33)
{
    third="Bros";
}
else if (result>0.33 && result<0.66)
{
   third="limited";
}
else
{
third="Hub";
}



console.log("Bussiness name is = ");
console.log(`${first}  ${second}  ${third} `);