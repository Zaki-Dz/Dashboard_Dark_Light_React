import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Heading from './components/Heading'
import RightMenu from './components/RightMenu'
import Dashboard from './pages/Dashboard'

const App = () => {
	const [isDark, setIsDark] = useState(false)

	const [isOpen, setIsOpen] = useState(false)

	const toggleTheme = () => {
		setIsDark(!isDark)

		let body = document.querySelector('body')

		body.classList.toggle('dark')
	}

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="app">
			<Sidebar
				isDark={isDark}
				toggleTheme={toggleTheme}
				isOpen={isOpen}
				toggleMenu={toggleMenu}
			/>

			<Heading
				isDark={isDark}
				toggleTheme={toggleTheme}
				isOpen={isOpen}
				toggleMenu={toggleMenu}
			/>

			<RightMenu isDark={isDark} />

			<Dashboard isDark={isDark} />
		</div>
	)
}

export default App
