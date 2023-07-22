import React from 'react'

const Header = () => {

    const divStyle = {
        backgroundColor: 'blue', // Replace 'blue' with your desired background color
        width: '1500px',
        height: '100px',
        padding: '20px',
        color: 'white', // Optional - set text color to white for better visibility on a colored background
      };

      const textStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: '50px',
      };

  return (
    <header style={divStyle}>
        <h1 style={textStyle}>
            To Do List
        </h1>
    </header>
  )
}

export default Header
