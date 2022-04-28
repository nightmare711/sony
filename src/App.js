import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Zalo, ScrollButton, Menu } from './components'
import { Home } from './pages'

export const onMoveAnimation = (ele, animation) => {
	const root = document.querySelector(`#${ele}`)
	if (root) {
		root.style.animation = `${animation} .3s`
		root.style.animationFillMode = 'forwards'
	}
}

const toggleVisibility = () => {
	const btn = document.querySelector('#btn-scroll')
	if (btn) {
		if (window.pageYOffset > 300) {
			btn.style.transform = 'translateY(0)'
			onMoveAnimation('header-text', 'moveOutOpacity')
		} else {
			btn.style.transform = 'translateY(200px)'
		}
	}
}

const App = () => {
	React.useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
	}, [])
	return (
		<Router>
			<div className='App'>
				<Header />
				<Menu />
				<Zalo />
				<ScrollButton />
				<Switch>
					<Route path='/' component={Home} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
