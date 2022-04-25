import React from 'react'
import './styles.css'

export const Container = ({ children }) => {
	return (
		<div className='container'>
			<div className='container-content'>{children}</div>
		</div>
	)
}
