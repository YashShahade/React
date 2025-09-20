function customrender(reactElement, container){
    const domElement = document.getElementById(reactElement.type)
    domElement.innerHTML = reactElement.clidren
    for(const prop in reactElement.props) {
        if(prop === 'children') {
        domElement.setAttribute(prop, reactElement.props[prop]);
}
Container.appendChild(domElement);

}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
},
    children: 'Click me to visit Google'
};