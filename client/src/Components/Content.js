
import React from 'react'
import RndFunCom from './RndFunCom'
import RndClsCom from './RndClsCom'

export default function Content() {
  return (
    <>
    <hr />
    <h3>Rnd Fun Com</h3>
      <div>
        <RndFunCom />
      </div>
      <hr />
      <h3>Rnd Cls Com</h3>
      <div>
        <RndClsCom />
      </div>
      <hr />
    </>
  )
}

import { useState } from 'react'

const Content = () => {
  //let name = 'thanush'
  const [name, setName] = useState('thanush')
  const [age, setAge] = useState(24)

  const handleClick = () => {
   setName('Shaji')
   setAge(23)
  }
  
  
  return (
    <div className='home'>
      <h2>Home Page</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
  }

export default Content

