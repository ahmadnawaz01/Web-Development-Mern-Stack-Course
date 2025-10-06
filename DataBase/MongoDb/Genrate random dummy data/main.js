import express from 'express';
import mongoose from 'mongoose';
import Employee from './models/employee.js';

mongoose.connect('mongodb://localhost:27017/company');
console.log('Connected to MongoDB');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const Foo = 'Hello from server!';
  res.render('index', { foo: Foo });
});

//utitility Function
const getrandow=(arr)=>{
let rno=Math.floor(Math.random()*(arr.length));
return arr[rno];
}

app.get('/generate', async(req, res) => {
//empty or clear the collection
await Employee.deleteMany({});
  // generate random data  

let randomname=['Ali','Ahmad','Hassan','Hamza']
let randomlang=['Python','C++','Javascript','Java']
let randomcity=['Lahore','Islamabad','Karachi','Okara']
for (let index = 0; index < 10; index++) {
  const e = new Employee({
    name: getrandow(randomname),
    salary:Math.floor(Math.random()*22000),
    language:getrandow(randomlang),
    city:getrandow(randomcity),
    isManager: (Math.random()>0.5)?true:false
  });
  await e.save();
  console.log(e);
  
}


  res.render('index', { foo: 'Foo' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});