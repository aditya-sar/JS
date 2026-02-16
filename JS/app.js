


function getPromises() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1 Resolved");
        }, 500);
    });

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2 Resolved");
        }, 500);
    });
    
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("3 Rejected");
        }, 500);
    });
    
    return [p1, p2, p3];
}


function checkIfAllPromisesAreResolved(promises) {  
    return new Promise((resolve, reject) => {
        let counter = 0;
        promises.forEach((promise, i) => {
            promise.then(value => {
                counter += 1; 
                if(counter === promises.length) {
                    resolve(counter);
                }
            })
            .catch(error => {
                reject(i);
            });
        });
    });
}


function runCase() {
    let promises = getPromises();
    let result = checkIfAllPromisesAreResolved(promises);
    result.then(value => {
        console.log("All promises resolved.");
    })
    .catch(error => {
        console.log("One of the promises failed!");
        console.log("Promise that failed was: " + error+1);
    });
}
runCase();