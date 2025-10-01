//crud operations----------------

use ('cruddb')


//create ------------------
db.createCollection('courses')

db.courses.insertOne({
    name:"DSA",
    credit:"3",
    timing:"3pm tuesday",
    teacher:"Prorector"
})

db.courses.insertMany([
  { name: "DSA", credit: "3", timing: "3pm Tuesday", teacher: "Prorector" },
  { name: "Operating Systems", credit: "4", timing: "10am Monday", teacher: "Dr. Sharma" },
  { name: "Database Systems", credit: "3", timing: "11am Wednesday", teacher: "Prof. Mehra" },
  { name: "Computer Networks", credit: "3", timing: "1pm Friday", teacher: "Dr. Rao" },
  { name: "Artificial Intelligence", credit: "3", timing: "9am Thursday", teacher: "Dr. Iyer" },
  { name: "Machine Learning", credit: "4", timing: "2pm Monday", teacher: "Prof. Kapoor" },
  { name: "Web Development", credit: "2", timing: "4pm Tuesday", teacher: "Mr. Singh" },
  { name: "Software Engineering", credit: "3", timing: "12pm Wednesday", teacher: "Dr. Banerjee" },
  { name: "Compiler Design", credit: "4", timing: "3pm Thursday", teacher: "Prof. Ranganathan" },
  { name: "Theory of Computation", credit: "3", timing: "10am Friday", teacher: "Dr. Bose" },
  { name: "Cyber Security", credit: "3", timing: "2pm Tuesday", teacher: "Ms. Nair" },
  { name: "Human Computer Interaction", credit: "2", timing: "11am Monday", teacher: "Prof. Dutta" },
  { name: "Cloud Computing", credit: "3", timing: "9am Wednesday", teacher: "Dr. Krishnan" },
  { name: "Data Mining", credit: "3", timing: "1pm Thursday", teacher: "Dr. Mishra" },
  { name: "Mobile App Development", credit: "2", timing: "4pm Friday", teacher: "Mr. Khan" }
])

// //read---------------------
let a= db.courses.find({credit:"2"});
console.log(a)
console.log(a.count())
a=a.toArray();


// update---------------------


db.courses.updateMany({credit:"4"},{$set:{credit:"4"}})
db.courses.updateOne({credit:"4"},{$set:{credit:"8"}})
db.courses.updateOne({credit:"4"},{$set:{credit:"8"}})
db.courses.updateOne({credit:"4"},{$set:{credit:"8"}})




//delete-----------------------


// db.courses.deleteOne({credit:"4"})

db.courses.deleteMany({credit:"8"})



//comparison operations-------------------

db.courses.find({ credit: { $gt: "2" } }).pretty()

db.courses.find({ credit: { $lte: "3" } }).pretty()

db.courses.find({ credit: { $ne: "4" } }).pretty()

db.courses.find({ credit: { $in: ["2", "4"] } }).pretty()

db.courses.find({ credit: { $nin: ["2", "4"] } }).pretty()