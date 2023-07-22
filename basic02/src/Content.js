import React from 'react'

const Content = () => {

    function handleNameChange(){
        const names =["Earn","Grow","Givev"];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }

    
    const handleClick = (e) => {
      console.log(e.target.innerText)
    }
    const handleClick2 = (name) => {
        console.log("Thanks for the support ${name}")
      }
    
    
  return (
    <main >
      <p onDoubleClick={() => handleClick2('Bala')}>
        Lets  {handleNameChange()} mony
      </p>
      <button onClick={(e) => {handleClick(e)}}>
        Subbscribe
      </button>
    </main>
  )
}

export default Content
