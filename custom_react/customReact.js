let reactElement={
    type:"a",
    props:{
        href:"www.google.com",
        target:"_blank"
    },
    children:"click me to visit Google"
}


let mainRoot=document.getElementById("root")


function customRender(reactElement,container){

    // let domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute("href",reactElement.props.href)
    // domElement.setAttribute("target",reactElement.props.target)
    // container.appendChild(domElement)

    let domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop=="children"){
            continue
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

customRender(reactElement,mainRoot)