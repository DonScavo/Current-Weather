const formBuscador = document.getElementById('formBuscador');
const buscador = document.getElementById('buscador');
const search = document.getElementById('search');
const resultado = document.getElementById('resultado');


formBuscador.addEventListener('submit', (e) => {
    e.preventDefault();

    if (buscador === '') {
        console.log('Inserta una ciudad para ver el clima');
    } else {
        const ciudad = buscador.value;

        consultarAPI(ciudad)
            .then(data => {
                this.resultado.innerHTML = `<p> Ciudad: ${city} : ${data.respuesta.main.temp}</p> `;
            })
    }
})


// Consulta asyncrona a la api
async function consultarAPI(city) {

    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=308bbc0e3827c70548c75bf344117eb5&lang=sp`);

    const respuesta = await url.json();
    console.log(respuesta)
    return {
        respuesta
    }
}

