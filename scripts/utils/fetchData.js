export default async function getData () {

    const localeURL = './data/photographers.json'

    const response = await fetch(localeURL)

    const data = await response.json()

    return data
}