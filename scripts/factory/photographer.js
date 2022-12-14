import ExtractDataFactory from "./data.js"

export default class PhotographerFactory extends ExtractDataFactory {

    constructor (data) {
        super()
        this.data = data
        this.urlPhotographer = `photographer.html?id=${data.id}`
        this.imageSource = `assets/photographers/${data.portrait}`
        this.location = `${data.city}, ${data.country}`
        this.price = `${data.price}€/jour`
    }

    getPhotographerCardComponent () {

        const photographerCardSchema = {
            article : {
                tagHTML: 'article',
                classnames: ['card'],
                root: true,
            },
            a : {
                tagHTML: 'a',
                parent : '.card',
                classnames: ['card__header'],
                attributes: {
                    href: this.urlPhotographer,
                    tabindex: '1'
                },
            },
            imageContainer : {
                tagHTML: 'div',
                parent: '.card__header',
                classnames: ['card__header__image'],
            },
            img: {
                tagHTML: 'img',
                parent: '.card__header__image',
                attributes : {
                    alt: this.data.name,
                    src: this.imageSource
                },
            },
            h2 : {
                tagHTML: 'h2',
                parent: '.card__header',
                classnames: ['card__header__title'],
                text: this.data.name,
            },
            bodyContainer : {
                tagHTML: 'div',
                parent: '.card',
                classnames: ['card__body'],
            },
            location : {
                tagHTML: 'p',
                parent: '.card__body',
                classnames: ['card__body__location'],
                text: this.location,
            },
            tagline : {
                tagHTML: 'p',
                parent: '.card__body',
                classnames: ['card__body__tagline'],
                text: this.data.tagline,
            },
            price : {
                tagHTML: 'p',
                parent: '.card__body',
                classnames: ['card__body__price'],
                text: this.price,
            }
        }

        return this.getHierarchizedComponent (photographerCardSchema)
    }

    getPhotographerProfileTextComponent () {
        const photographerProfileTextSchema = {
            article : {
                tagHTML: 'article',
                classnames: ['card'],
                root: true,
            },
            h1: {
                tagHTML: 'h1',
                parent: '.card',
                classnames: ['card__title'],
                text: this.data.name,
            },
            location : {
                tagHTML: 'p',
                parent: '.card',
                classnames: ['card__location'],
                text: this.location,
            },
            tagline : {
                tagHTML: 'p',
                parent: '.card',
                classnames: ['card__tagline'],
                text: this.data.tagline
            }
        }

        return this.getHierarchizedComponent (photographerProfileTextSchema)
    }

    getPhotographerProfileImageComponent () {

        const photographerProfileImageSchema = {
            img: {
                tagHTML: 'img',
                root: true,
                attributes: {
                    src: this.imageSource,
                    alt: this.data.name
                }
            }
        }

        return this.getHierarchizedComponent(photographerProfileImageSchema)

    }

}
