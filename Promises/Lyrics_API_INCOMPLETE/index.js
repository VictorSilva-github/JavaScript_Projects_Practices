//pegando elementos do DOM
const artistInput = document.querySelector('#artistName');
const songInput = document.querySelector('#songName');
// const form = document.querySelector('#lyricsForm');
const output = document.querySelector('.lyrics-output pre');
const btn = document.querySelector('.fetchBtn');
const loading = document.querySelector('.loading');

//adicionando evento de click no BTN
btn.addEventListener('click', () => {
    //check if the filds are not empty
    if (artistInput.value !== "" && songInput.value !== "") {

        //mostra de loading div
        loading.style.opacity = "1";

        // fetch the API data using the artist and songName, dos inputs
        fetch(`https://api.lyrics.ovh/v1/${artistInput.value}/${songInput.value}`)

            // pega a data vinda da api
            .then(response => response.json())
            .then(data => {
                if (data.lyrics !== undefined) {
                    //output das legendas
                    output.innerHTML = data.lyrics
                    //se a legenda nao for encontrar ELSE
                } else {
                    //output
                    output.innerHTML = `No lyrics were found!!!`
                }
                //hide the loading
                loading.style.opacity = '0';
                //show the output div fade in animation
                document.querySelector('.lyrics-output').style.opacity = "1";
            });
    }
});
