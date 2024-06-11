import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//     return(
//          <>
//         <div>Hello !</div>
//         <p>React App</p>
//         </>
//     )
// }

// let reactElement={
//     type:"a",
//     props:{
//         href:"www.google.com",
//         target:"_blank"
//     },
//     children:"click me to visit Google"
// }

// let AnotherElement=(
//     <a href="https://sujitbarnawal.com.np" target='_blank'>Visit Sujit</a>
// )

let username=" sujit"
let reactElement=React.createElement(
    "a",
    {"href":"https://sujitbarnawal.com.np","target":"_blank"},
    "Visit me",
     username
)

ReactDOM.createRoot(document.getElementById('root'))
.render(

    // <App />
    // <MyApp/>
    // AnotherElement
    reactElement

)
