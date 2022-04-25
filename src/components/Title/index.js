import './styles.css'

export const Title = ({ titleText, backgroundColor, color = 'red' }) => {
	return (
		<div className='title-container'>
			<div />
			<span style={{ backgroundColor: backgroundColor, color: color }}>{titleText}</span>
			<div className='right-border' />
		</div>
	)
}
