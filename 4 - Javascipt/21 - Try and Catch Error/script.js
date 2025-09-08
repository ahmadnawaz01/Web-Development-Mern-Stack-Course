let a=prompt("Enter First Number")
let b=prompt("Enter second Number")
// let sum=a+b;

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Soryy this is not allowed ")
}

let sum=parseInt(a)+parseInt(b);


try {
    console.log("The sum = ",sum*x);
} catch (err) {
    alert(err.name);
    alert(err.message);
    alert(err.stack);
}
finally{
    console.log("Files are being closed and db connection is being closed")
}
