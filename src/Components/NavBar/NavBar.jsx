import React, {useState} from 'react'
import './NavBar.css'

export function NavBar () {
	const [ color, setColor] = useState(false)
	const changeColor = () => {
		if (window.scrollY >= 180){
			setColor(true)
		}
		else {
			setColor(false)
		}
	} 

	window.addEventListener('scroll', changeColor)
  return (
	
    <header>
		<div   className= {color ? "NavBar NavBar-Bg" : "NavBar" } >

		</div>
    </header>
  )
}
