import React from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import './styles.css'

export const IncomingCall = () => {
	return (
		<div className='phone-call'>
			<div onClick={() => window.open('tel:0818002026', '_self')} className=' call-animation'>
				<PhoneInTalkIcon />
			</div>
			<span className='phone'>0818002026</span>
		</div>
	)
}
