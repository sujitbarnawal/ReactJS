// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // let newObj={
  //   username:"sujit",
  //   passcode:1123
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>

      {/* <figure classNameName="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" >
        <img classNameName="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/23534117/pexels-photo-23534117/free-photo-of-a-city-skyline-is-reflected-in-a-body-of-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
          <div classNameName="pt-6 space-y-4">
            <blockquote>
              <p classNameName="text-lg font-medium">
                “Tailwind CSS is the only framework that I have seen scale
                on large teams. It is easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption classNameName="font-medium">
              <div>
                Sarah Dayan
              </div>
              <div>
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
      </figure> */}

        {/* <Card age="20" newObject={newObj}/> */}
        <Card username="Jerry" btnText="Visit me"/>
        <Card username="Jessy" btnText="Visit my website"/>
        <Card />
    </>
  )
}

export default App
