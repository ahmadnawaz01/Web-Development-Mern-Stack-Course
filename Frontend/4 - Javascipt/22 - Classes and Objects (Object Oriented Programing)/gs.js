class users{
    constructor(name)
    {
        this.name=name;
    }
    get name(){
        return this._name;
    }
set name(value){
    if(value.lenth<4){
        console.log("name is too short")
        return;
    }
    this._name=value;
}

}

let user=new users("john");
console.log(user.name)

user.name="ahamd"
console.log(user.name)

