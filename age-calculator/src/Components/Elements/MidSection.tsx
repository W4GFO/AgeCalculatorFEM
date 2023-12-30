import './MidSection.scss'

type MidSectionProps = {
	className:string
}

export const MidSection = ({className}: MidSectionProps) => {
	const CN:string = className + ' ' + 'mid-section-frame' 

	return (
		<div className={CN}>
			
		</div>
	)
}