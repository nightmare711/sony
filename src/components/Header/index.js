import React from 'react'
import { Container } from 'components/Container'
import { Link } from 'react-router-dom'
import './styles.css'

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

export const Header = () => {
	return (
		<div className='header-container'>
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
