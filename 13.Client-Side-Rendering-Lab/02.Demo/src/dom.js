export function dom(tagName, attributes = {}, ...content) {
    const element = document.createElement(tagName) //attributes = { className, id, checked ....}

    for (const propName in attributes) {
        if (propName == 'dataset') {
            for (let dataItem in attributes.dataset) {
                element.dataset[dataItem] = attributes.dataset[dataItem]
            }
        } else if (propName == 'style') {
            for (let dataItem in attributes.style) {
                element.style[dataItem] = attributes.style[dataItem]
            }


        } else if (propName.slice(0, 2) == 'on') {
            const eventType = propName.slice(2).toLocaleLowerCase();
            element.addEventListener(eventType, attributes[propName])
        } else {
            element[propName] = attributes[propName]
        }
    }
    for (const item of content) {
        element.append(item)
    }
    return element
}