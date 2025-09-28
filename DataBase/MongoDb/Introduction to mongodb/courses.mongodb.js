
use('web');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  { "name": "dsa", "instructor": "ahmad", "age": "21" },
  { "name": "os", "instructor": "fatima", "age": "22" },
  { "name": "dbms", "instructor": "ali", "age": "19" },
  { "name": "networks", "instructor": "sara", "age": "24" },
  { "name": "ai", "instructor": "hassan", "age": "23" },
  { "name": "ml", "instructor": "amna", "age": "28" },
  { "name": "cybersecurity", "instructor": "usman", "age": "25" },
  { "name": "webdev", "instructor": "zara", "age": "20" },
  { "name": "mobiledev", "instructor": "bilal", "age": "30" },
  { "name": "cloud", "instructor": "noor", "age": "26" },
  { "name": "data_science", "instructor": "jamal", "age": "27" },
  { "name": "big_data", "instructor": "ayesha", "age": "22" },
  { "name": "compilers", "instructor": "omer", "age": "23" },
  { "name": "parallel_computing", "instructor": "huda", "age": "29" },
  { "name": "graphics", "instructor": "faraz", "age": "20" },
  { "name": "iot", "instructor": "mariam", "age": "21" },
  { "name": "robotics", "instructor": "danish", "age": "24" },
  { "name": "nlp", "instructor": "iqra", "age": "25" },
  { "name": "vr_ar", "instructor": "saad", "age": "28" },
  { "name": "blockchain", "instructor": "hafsa", "age": "19" }
]);

console.log('data is inserted successfully');
