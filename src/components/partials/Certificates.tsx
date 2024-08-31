import Image from '../Image'
import Section from '../Section'
import certificateNational from '@/assets/images/certificate_national.jpg'
import certificateAppreciation from '@/assets/images/certificate_appreciation.jpg'
import certificateParticipation from '@/assets/images/certificate_participation.jpg'
import certificateIts from '@/assets/images/certificate_its.jpg'

export default function Certificates() {
	return (
		<Section
			id="certificates"
			title="Certificates"
			subtitle="Information Technology"
		>
			<p className="text-center text-lg">August 2024</p>

			<div className="flex flex-col-reverse justify-center gap-4 sm:flex-row md:gap-6">
				<Image
					src={certificateNational}
					alt="National's Certificate"
					className="h-full"
				/>

				<div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:gap-6">
					<Image
						src={certificateAppreciation}
						alt="Certificate of Appreciation"
						className="h-full"
					/>

					<Image
						src={certificateParticipation}
						alt="Certificate of Participation"
						className="h-full"
					/>

					<Image
						src={certificateIts}
						alt="Certificate of ITS"
						className="h-full"
					/>
				</div>
			</div>
		</Section>
	)
}
