import getData from "../utils/fetchData.js"
import PhotographerFactory from "../factory/photographer.js"


async function getPhotographers() {
    const data = await getData()
    return { photographers: data.photographers }
}

function displayData(photographers) {

    const sectionDOM = document.querySelector(".photographer__section")

    photographers.forEach((photographerData) => {
        const factory = new PhotographerFactory(photographerData)
        const photographerCard = factory.getPhotographerCardComponent()
        sectionDOM.appendChild(photographerCard)
    })

}

async function init() {
    const { photographers } = await getPhotographers()
    displayData(photographers)
}

init()
