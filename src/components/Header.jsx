import React from 'react'
import PropTypes from 'prop-types'

export default function Header({text,fontColor,font,fontSize}) {
  
  const headerStyles = {
    color:fontColor,
    fontFamily:font,
    fontSize:fontSize
  }
    return (
    <header style={headerStyles}>
        <div className="container">
            <h2 className='header-text'>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps ={
    text:"What others think about the product",
    fontColor:'#191B4A',
    font:"Merriweather",
    fontSize:34
}

Header.propTypes = {
    text:PropTypes.string.isRequired,
}