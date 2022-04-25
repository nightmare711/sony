import React from 'react'
import { Container } from 'components/Container'
import { Link } from 'react-router-dom'
import './styles.css'

const mock = [
	{
		title: 'Giới thiệu',
		hash: '#gioi-thieu',
	},
	{
		title: 'Quy trình',
		hash: '#quy-trinh',
	},
	{
		title: 'Sửa tivi sony',
		hash: '#sua-tivi-sony',
	},
	{
		title: 'Liên hệ',
		hash: '#lien-he',
	},
]

export const Header = () => {
	return (
		<div className='header-container'>
			<Container>
				<div className='header'>
					<img src={require('../../assets/logo.png')} alt='Logo' />
					{mock.map((item, key) => (
						<Link to={item.hash} key={key}>
							{item.title}
						</Link>
					))}
				</div>
			</Container>
		</div>
	)
}
