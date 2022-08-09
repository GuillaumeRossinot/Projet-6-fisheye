export default function clearHTMLMedia (htmlMedia) {

    while (htmlMedia.firstChild) {
        htmlMedia.removeChild(htmlMedia.lastChild)
    }

}