import getData from "../utils/fetchData.js"

import PhotographerFactory from "../factory/photographer.js"
import MediasFactory from "../factory/media.js"
import LikesCounterPopupFactory from "../factory/likesCounterPopup.js"
import DropdownFactory from "../factory/dropdown.js"

function getPhotographerID () {
    const urlQueryString = window.location.search
    const urlParams = new URLSearchParams(urlQueryString)
    const photographerID = urlParams.get('id')
    return photographerID
}

export async function getPhotographerData () {

    const photographerID = getPhotographerID()
    const data = await getData()
    const metaDatas = data.photographers.filter(v => v.id.toString() === photographerID)
    const mediaDatas = data.media.filter(v => v.photographerId.toString() === photographerID)

    const metaData = metaDatas.length > 0 ? metaDatas[0] : {}

    return { metaData, mediaDatas }
}

function displayProfileData (metaData) {

    const factory = new PhotographerFactory(metaData)
    const photographerProfileText = factory.getPhotographerProfileTextComponent()
    const photographerProfileImage = factory.getPhotographerProfileImageComponent()

    const textSection = document.querySelector(".photograph__meta__text")
    const imageSection = document.querySelector('.photograph__meta__image')

    textSection.appendChild(photographerProfileText)
    imageSection.appendChild(photographerProfileImage)

}

export function displayMediaDatas (mediaDatas) {

    const section = document.querySelector(".photograph__media .cards")

    mediaDatas.forEach((mediaData) => {
        const factory = new MediasFactory(mediaData)
        const mediaCard = factory.getMediaCardComponent()
        section.appendChild(mediaCard)
    })

}


function displayLikesCounterPopupData (metaData, mediaDatas) {

    const totalLikes = Object.values(mediaDatas).reduce((acc, current) => acc + current.likes, 0)
    const price = metaData.price

    const factory = new LikesCounterPopupFactory(totalLikes, price)
    const likesCounterPopup = factory.getLikesCounterPopupComponent()

    const section = document.querySelector(".photograph__popup")
    section.appendChild(likesCounterPopup)

}

export function getDropdown () {
    const dropdown = document.querySelector('#dropdown-selector')
    new DropdownFactory(dropdown, 0)
}

async function init () {

    const { metaData, mediaDatas } = await getPhotographerData()

    displayProfileData(metaData)
    displayMediaDatas(mediaDatas)
    displayLikesCounterPopupData (metaData, mediaDatas)
    getDropdown()
}

init()
