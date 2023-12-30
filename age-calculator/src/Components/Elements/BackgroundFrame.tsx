import './BackgroundFrame.scss'
import {DateEntryFrame} from '../DateEntry/DateEntryFrame'
import {MidSection} from './MidSection'
import {AgeDisplayFrame} from '../AgeDisplay/AgeDisplayFrame'

type Props = {}

export const BackgroundFrame = (props: Props) => {
	return (
		<section className='backgroundframe-main'>
			<DateEntryFrame className='main-section main-section-top'/>
			<MidSection className='main-section main-section-mid' />
			<AgeDisplayFrame className='main-section main-section-btm' />
		</section>
	)
}