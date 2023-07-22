import React from 'react'

const Footer = () => {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        height: '100px',
      };
    
      const textStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
      };

    const year = new Date();
  return (
    <footer style={footerStyle}>
        <p style={textStyle}>
Copyright &copy; {year.getFullYear()}

</p>
    </footer>
  )
}

export default Footer
