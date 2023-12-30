import './HomePage.scss'
import {BackgroundFrame} from '../Elements/BackgroundFrame'
type HomePageProps = {
	className?:string
}

export const HomePage = ({className}:HomePageProps) => {
	return (
		<main>
			<BackgroundFrame />
		</main>
	)
}
