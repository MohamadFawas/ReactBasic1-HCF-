import React from 'react'

const Content = () => {

    function handleNameChange(){
        const names =["Earn","Grow","Givev"];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }
  return (
    <div >
      <p>
        Lets  {handleNameChange()} mony
      </p>
    </div>
  )
}

export default Content
