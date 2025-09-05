


function devideFn(a, b){
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject(new Error('Division by zero'));
        } else {
            resolve(a / b);
        }
    });
}

devideFn(10, 2)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message));

devideFn(10, 0)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message));