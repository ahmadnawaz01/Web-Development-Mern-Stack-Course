// let obj = {
//     a:1,
//     b:"ahmad"
// };


// // console.log(obj);

// let animal = {
//     eats:true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit._proto_ = animal;     //sets rabbit.[[prototyppe]]=animal

// console.log(rabbit);


class animal{
    constructor(name)
    {
        this.name = name;
        console.log("object is created")
    }
    eats()
    {
        console.log("kha rha hun")

    }
    jumps(){
        console.log("koodh rha hun")
    }
}




class lion extends animal{
constructor(name)
{
    super(name);
    console.log("object is created and i am lion")
}
 eats()
    {
        super.eats();
        console.log("kha rha hun roar")

    }

}
let a= new animal("bunny");
console.log(a);
// a.jumps();
// console.log(a.name)

let l=new lion("shera")
console.log(l);