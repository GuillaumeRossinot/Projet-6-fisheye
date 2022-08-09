import LightboxFactory from "../factory/lightbox.js"


export function getLightbox (mediaElement) {

    /** GETTING LIGHTBOX ARGUMENTS */
    const media = mediaElement.srcElement

    const currentMedia = media.closest('.card')
    const Medias = currentMedia.closest('.cards').querySelectorAll('.card')
    const currentMediaIndex = [...Medias].findIndex(Media => Media === currentMedia)

    /*** USING lIGHTBOX */
    const lightboxDOM = document.querySelector('#lightbox')
    const lightbox = new LightboxFactory(lightboxDOM, media, currentMediaIndex, Medias)
    lightbox.displayLightbox()
    lightbox.setLightbox()

    /**PREVIOUS BUTTON */
    const previousLightboxBtn = document.querySelector('.lightbox__previous')
    previousLightboxBtn.addEventListener('click', () => lightbox.setPreviousLightbox())
    previousLightboxBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') lightbox.setPreviousLightbox()
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') lightbox.setPreviousLightbox()
    })

    /**NEXT BUTTON */
    const nextLightboxBtn = document.querySelector('.lightbox__next')
    nextLightboxBtn.addEventListener('click', () => lightbox.setNextLightbox())
    nextLightboxBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') lightbox.setNextLightbox()
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') lightbox.setNextLightbox()
    })

    /** CLOSE BUTTON */
    const closeLightBoxBtn = document.querySelector('#lightbox .close-btn')
    closeLightBoxBtn.addEventListener('click', () => lightbox.closeLightbox())
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') lightbox.closeLightbox()
    })

    /** PAUSE ON VIDEO */
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault()
            lightbox.setVideoOnPause()
        }
    })

}
