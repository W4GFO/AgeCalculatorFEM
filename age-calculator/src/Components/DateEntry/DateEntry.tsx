import {useState} from 'react'
import {DateEntryFrame} from './DateEntryFrame'

import './DateEntry.scss'

type Props = {
	className:string
	title:string
}

export const DateEntry = ({className, title}: Props) => {
	const CN:string = className + ' ' + 'data-entry-element-frame' 

	return (
		<div className={CN}>
			<div className='dataentry-elements-container'>
				<p>{title}</p>
				<input placeholder='-' type="number" className="number-input"/>
			</div>
		</div>
	)
}

//placeholder={'Enter the ' + title}