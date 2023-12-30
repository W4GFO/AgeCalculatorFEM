import './DateEntryFrame.scss'
import {DateEntry} from './DateEntry'

type Props = {
	className:string
}

export const DateEntryFrame = ({className}: Props) => {
	const CN:string = className + ' ' + 'date-entry-frame' 

	return (
		<section className={CN}>
			<DateEntry className='date-entry-component' title='Day' />
			<DateEntry className='date-entry-component' title='Mon' />
			<DateEntry className='date-entry-component' title='Year'/>
			<div className='date-entry-component place-holder'></div>
		</section>
	)
}