import './BackgroundFrame.scss'
import {DateEntryFrame} from '../DateEntry/DateEntryFrame'
import {MidSection} from './MidSection'
import {AgeDisplayFrame} from '../AgeDisplay/AgeDisplayFrame'

type Props = {}

export const BackgroundFrame = (props: Props) => {
	return (
		<section className='backgroundframe-main'>
			<DateEntryFrame className='main-section'/>
			<MidSection className='main-section' />
			<AgeDisplayFrame className='main-section' />
		</section>
	)
}