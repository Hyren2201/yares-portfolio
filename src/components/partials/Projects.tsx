import Image from '../Image'
import Section from '../Section'
import dabawander from '@/assets/images/project_dabawander.jpg'

export default function Projects() {
	return (
		<Section
			id="projects"
			title="Projects"
			subtitle="Information Technology"
		>
			<p className="text-center text-lg">August 2024</p>

			<div>
				<a href="https://dabawander.org" target='_blank' className='cursor-pointer'>
					<Image
						src={dabawander}
						alt="Dabawander"
						className="mx-auto max-w-5xl"
					/>
				</a>
			</div>
		</Section>
	)
}
