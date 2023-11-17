//promises 

fetch('https://api.github.com/users/VictorSilva-github 6666') //Apagar o 66666
    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log(body);
    }) //mesma coisa de baixo.

    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log('Always execute!');
    });

// console.log('*************************************************************');
// console.log('*************************************************************');
// console.log('****************Usando Async and AWAIT ***********************');
// console.log('*************************************************************');
// console.log('*************************************************************');

//NO CASO eu posso criar a SINTAX de ASYNC AND AWAIT
//muito menos linhas de codigo 
async function githubSearchName() {
    //Usando ASYNC sempre vai retornar PROMISE
    try {
    const response = await fetch('https://api.github.com/users/VictorSilva-github');
    const body = await response.json();
       const name  = body.name;
       const login = body.login;
       return { name, login };
        // console.log(body);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('always execute 2');
    }
};

githubSearchName().then(({ name, login }) => {
    console.log(`${name} ${login}`)});
