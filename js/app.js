const formBuscador = document.getElementById('formBuscador');
const buscador = document.getElementById('buscador');
const search = document.getElementById('search');
const resultado = document.getElementById('resultado');
const alert = document.querySelector('.alert');


formBuscador.addEventListener('submit', e => {
    e.preventDefault();

    if (buscador.value === '') {
        console.log('Inserta una ciudad para ver el clima');
        alert.textContent = "Inserte una ciudad para consultar el clima";
        setTimeout(() => {
            alert.textContent = "";
        }, 2000)
    } else {
        const ciudad = buscador.value;
        consultarAPI(ciudad);
    }
})


// Consulta asyncrona a la api
async function consultarAPI(city) {

    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=308bbc0e3827c70548c75bf344117eb5&lang=sp&units=metric`);
    if (url.status === 404) {
        alert.textContent = "Esa ciudad no existe (que yo sepa), ¡intenta con otra!";
        setTimeout(() => {
            alert.textContent = "";
        }, 2000)
    } else if (url.status === 200) {
        const respuesta = await url.json();

        draw(respuesta);

    }
}

function draw(data) {
    console.log(data)
    resultado.innerHTML = `<p> Ciudad: ${data.name} <br>
    Estado: ${data.weather[0].description} <br>
    Temperatura: ${data.main.temp}°C <br>
    Sensación termica: ${data.main.feels_like}°C <br>
    Humedad: ${data.main.humidity}% <br>
    Viento: ${data.wind.speed} M/S
    </p> `;
}
