import clearHTMLMedia from "../utils/clearHTMLMedia.js"

export default class LightboxFactory {

    /**
     *
     * @param {htmlElement} lightboxDOM lightbox destination
     * @param {htmlElement} media img or video HTMLelement
     * @param {int} currentMediaIndex the current index of the html .card Media
     * @return {MediaList} HTMLMedia list of all parents of class ".card"
    */

    constructor(lightboxDOM, media, currentMediaIndex, Medias) {
        this.lightbox = lightboxDOM
        this.media = media
        this.currentMediaIndex = currentMediaIndex
        this.Medias = Medias
        this.title = this.getTitle()
        this.lightboxMedia = this.lightbox.querySelector('.lightbox__media')
        this.lightboxTitle = this.lightbox.querySelector('.lightbox__title')
    }

    displayLightbox () {
        this.lightbox.style.display = 'block'
    }

    closeLightbox () {
        this.lightbox.style.display = 'none'
    }

    
    setMedia () {
        this.media = this.getMedia()
    }

    setTitle () {
        this.title = this.getTitle()
    }

    setLightbox () {
        this.setLightboxMedia()
        this.setLightboxTitle()
    }

     setLightboxMedia () {
        clearHTMLMedia(this.lightboxMedia)
        const newMedia = this.media.cloneNode(true)
        this.lightboxMedia.appendChild(newMedia)
    } 

    setLightboxTitle () {
        this.lightboxTitle.textContent = this.title
    }

    setPreviousLightbox () {
        this.currentMediaIndex = this.getPreviousMediaIndex()
        this.setMedia()
        this.setTitle()
        this.setLightbox()
    }

    setNextLightbox () {
        this.currentMediaIndex = this.getNextMediaIndex()
        this.setMedia()
        this.setTitle()
        this.setLightbox()
    }

    setVideoOnPause () {
        const video = this.lightboxMedia.querySelector('video')
        if (!video) return
        video.paused ? video.play() : video.pause()
    }

    /***GETTERS*/
    getMedia () {
        const currentMedia = this.Medias.item(this.currentMediaIndex)
        const media = currentMedia.querySelector('img, video')
        return media
    }

    getTitle () {
        const currentMedia = this.Medias.item(this.currentMediaIndex)
        const title = currentMedia.querySelector('.card__body__title').textContent
        return title
    }

    /***INDEXES */
    getPreviousMediaIndex () {
        const previousIndex = this.currentMediaIndex > 0 ? this.currentMediaIndex - 1 : this.Medias.length - 1
        return previousIndex
    }

    getNextMediaIndex () {
        const nextIndex = this.currentMediaIndex < this.Medias.length - 1 ? this.currentMediaIndex + 1 : 0
        return nextIndex
    }

}
