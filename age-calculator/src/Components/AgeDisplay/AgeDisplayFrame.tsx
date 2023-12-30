import './AgeDisplayFrame.scss'

type Props = {
	className:string
}

export const AgeDisplayFrame = ({className}: Props) => {
	const CN:string = className + ' ' + 'age-display-section-frame' 

	return (
		<div className={CN}>
			
		</div>
	)
}