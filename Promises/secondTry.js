//entendo o AWAIT

function firstFunction() {
    return new Promise((resolve) =>{
    
        setTimeout(() => {
            console.log('Esperou isso AQUI!');
            resolve();
        }, 1000);
    });
};

async function secondFunction() {
    console.log('Iniciou');
    await firstFunction(); //aqui espera o valor da funcao de cima.
    console.log('Terminou');
}

console.log(secondFunction());


//function API - consumindo 

function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}


async function showName(id) {
    const user = await getUser(id);

    console.log(`user name is: ${user.data.first_name}`);
}


showName(3);



