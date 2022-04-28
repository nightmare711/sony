import React from 'react'

export const Zalo = () => {
	return (
		<img
			onClick={() => window.open('https://zalo.me/0818002026', '_blank')}
			style={{
				position: 'fixed',
				bottom: '50px',
				left: '20px',
				zIndex: 1000,
				width: '70px',
				height: '70px',
				borderRadius: '50%',
				objectFit: 'cover',
			}}
			className='zalo'
			src={require('../../assets/zalo.png')}
			alt='Zalo'
		/>
	)
}
