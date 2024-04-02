const Content = () => {

  const handleClick = (e) => {
    console.log('Hello Guys', e)
  }
  const handleClickAgain = (name, e) =>{
    console.log('hello' + name, e.target)
  }
  return (
    <div className='home'>
      <h2>Content</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain('thanush')}>Click me again</button>
    </div>
  )
}

export default Content