import Animales from "./consulta.js"

document
    .getElementById("animal")
    .addEventListener("change", async (event) => {
        const {animales} = await Animales.getData();
        console.log(animales);
        const nombreAnimal = document
            .getElementById("animal")
            .value;
        const animalTipo = event.target.value
        const imagenAnimal = animales
            .find(a => a.name == animalTipo)
            .imagen

            document
            .getElementById("preview")
            .innerHTML = `<img class="w-100 h-100" src="/assets/imgs/${imagenAnimal}"/>`;
    })
