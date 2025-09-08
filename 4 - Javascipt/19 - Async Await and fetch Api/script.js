// simulating getting data for, server


// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }


// settled means resolve or reject


// resolve means promise has settled successfully
// reject means promise has not settled successfully



async function getdata() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.text();
    return data;
}


// console.log("load data")
// let data = getdata();
// data.then((v) => {
//     console.log(data);

//     console.log("prcess data")
// })

async function main() {
    console.log("Loading Modules");

    console.log("Do something else");

    console.log("load data")
    let dat = await getdata();

    console.log(dat);

    console.log("prcess data")

    console.log("task 2");

}

main();

