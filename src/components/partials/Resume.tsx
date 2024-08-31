import Image from '../Image'
import Section from '../Section'
import resume from '@/assets/images/resume.jpg'

export default function Resume() {
	return (
		<Section
			id="resume"
			title="Resume"
			className="grid place-items-center"
		>
			<Image
				src={resume}
				alt="Resume"
				className="max-w-3xl"
			/>
		</Section>
	)
}
