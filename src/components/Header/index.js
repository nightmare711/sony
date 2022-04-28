import React from 'react'
import { Container } from 'components/Container'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import './styles.css'

export const onMoveAnimation = (ele, animation) => {
	const root = document.querySelector(`#${ele}`)
	if (root) {
		root.style.animation = `${animation} .3s`
		root.style.animationFillMode = 'forwards'
	}
}

const mock = [
	{
		title: 'Giới thiệu',
		hash: 'gioi-thieu',
	},
	{
		title: 'Quy trình',
		hash: 'quy-trinh',
	},
	{
		title: 'Sửa tivi sony',
		hash: 'sua-tivi-sony',
	},
	{
		title: 'Liên hệ',
		hash: 'lien-he',
	},
]

export const Menu = () => {
	return (
		<div id='menu' className='menu'>
			{mock.map((item, key) => (
				<Link
					onClick={() => {
						document
							.getElementById(item.hash)
							.scrollIntoView({ behavior: 'smooth', block: 'start' })
						onMoveAnimation('menu', 'moveOutOpacity')
					}}
					key={key}
				>
					{item.title}
				</Link>
			))}
		</div>
	)
}

export const Header = () => {
	return (
		<div className='header-container'>
			{window.innerWidth < 1064 ? (
				<MenuIcon onClick={() => onMoveAnimation('menu', 'moveInOpacity')} className='hamburger' />
			) : null}
			<Container>
				<div className='header'>
					<img
						onClick={() =>
							document
								.getElementById('banner')
								.scrollIntoView({ behavior: 'smooth', block: 'start' })
						}
						src={require('../../assets/logo.png')}
						alt='Logo'
					/>
					{mock.map((item, key) => (
						<Link
							onClick={() =>
								document
									.getElementById(item.hash)
									.scrollIntoView({ behavior: 'smooth', block: 'start' })
							}
							key={key}
						>
							{item.title}
						</Link>
					))}
				</div>
			</Container>
		</div>
	)
}
