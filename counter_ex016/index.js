function contar() {
    let ini = document.getElementById('txti');
    console.log("Value of ini:", ini.value); // Log the value before conversion
    console.log("Type of ini:", typeof ini);

    let fim = document.getElementById('txtf');
    console.log("Value of fim:", fim.value); // Log the value before conversion
    console.log("Type of fim:", typeof fim);

    let passo = document.getElementById('txtp');
    console.log("Value of passo:", passo.value); // Log the value before conversion
    console.log("Type of passo:", typeof passo);

    let resJs = document.getElementById('res');
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resJs.innerHTML = 'Impossivel contar!!!';
        alert('[ERROR!], Faltam Dados!');
    } else {
        resJs.innerHTML = 'Contator...';

        let i = Number(ini.value);
        console.log("Value of i:", i); // Log the converted value
        console.log("Type of i:", typeof i);

        let f = Number(fim.value);
        console.log("Value of f:", f); // Log the converted value
        console.log("Type of f:", typeof f);

        let p = Number(passo.value);
        console.log("Value of p:", p); // Log the converted value
        console.log("Type of p:", typeof p);


        if (p <= 0) {
            window.alert('[ERROR!], PASSOS INVALIDOS! Considerando passo = 1');
            p = 1;
        }
        if (i < f) {
            // contagem crescente
            for (let index = i; index <= f; index += p) {
                resJs.innerHTML += ` ${index} \u{1F449}`;
            }
        } else {
            // contagem regressiva
            for (let index = i; index >= f; index -= p) {
                resJs.innerHTML += ` ${index} \u{1F449}`;
            }

        }
        resJs.innerHTML += `\u{1F3c1}`;
    }
}
