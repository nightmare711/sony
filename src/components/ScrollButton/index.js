import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './styles.css'

const onScrollTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export const ScrollButton = () => {
	return (
		<div id='btn-scroll' onClick={onScrollTop} className='cursor-pointer scroll-btn'>
			<ArrowUpwardIcon />
		</div>
	)
}
