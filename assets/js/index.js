import {Leon, Lobo, Oso, Serpiente, Aguila} from "./tipos.js";
import Data from "./Consulta.js";

let animales = [];

document
    .getElementById("btnRegistrar")
    .addEventListener("click", async () => {
        const data = await Data.getData();
        const dataAnimal = await data.animales;
        let nombre = document
            .getElementById("animal")
            .value;
        let edad = document
            .getElementById("edad")
            .value;
        let comentarios = document
            .getElementById("comentarios")
            .value;
        let img = document
            .querySelector("#preview>img")
            .src;
        const sonido = dataAnimal
            .find((a) => a.name == nombre)
            .sonido;

        let nuevoAnimal;

        if (nombre == "Aguila") {
            nuevoAnimal = new Aguila(nombre, edad, img, comentarios, sonido);
        } else if (nombre == "Leon") {
            nuevoAnimal = new Leon(nombre, edad, img, comentarios, sonido);
        } else if (nombre == "Lobo") {
            nuevoAnimal = new Lobo(nombre, edad, img, comentarios, sonido);
        } else if (nombre == "Oso") {
            nuevoAnimal = new Oso(nombre, edad, img, comentarios, sonido);
        } else if (nombre == "Serpiente") {
            nuevoAnimal = new Serpiente(nombre, edad, img, comentarios, sonido);
        }

        if (nombre && edad && comentarios) {
            animales.push(nuevoAnimal);
            reloadTable();
        } else {
            alert("Faltan campos por llenar");
        }
    });

const reloadTable = () => {
    const animalesTemplate = document.getElementById("Animales");
    animalesTemplate.innerHTML = "";
    animales.forEach((a, i) => {
        animalesTemplate.innerHTML += `
            <div class="card text-center cardAnimal m-3" style="width: 12rem;">
              <img onclick="modalAnimales('${i}')" src="${a.img}" id="animal${i}" class="card-img-top imgAnimal" alt="..." data-toggle="modal" data-target="#exampleModal" type="button">
              <div class="card-body p-0 clickAudio" style=" background-color: grey">
                <img src="assets/imgs/audio.svg" onclick="reproducir('${a.sonido}')"class="card-img-bottom imgAudio w-25" alt="...">
              </div>
            </div>
          `;
    });
}

window.modalAnimales = (i) => {
    document
        .querySelector(".modal-body")
        .innerHTML = `
                <img src="${animales[i]
        .img}" class="imagenAnimal rounded mx-auto d-block" alt="..." width="90%" >
                <h5 class="text-center m-3" style="color:white">${animales[i]
        .nombre}</h5>
                <p class="text-center m-3" style="color:white">${animales[i]
        .edad}</p>
                <p class="text-center m-3" style="color:white">Comentarios</p>
                <hr>
                <p class="text-center m-3" style="color:white">${animales[i]
        .comentarios}</p>
          `
}

window.reproducir = (sonido) => {
    let audio = new Audio("./assets/sounds/" + sonido)
    audio.play();

}