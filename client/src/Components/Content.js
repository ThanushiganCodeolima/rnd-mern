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