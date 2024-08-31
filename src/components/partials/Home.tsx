import Image from '../Image'
import Section from '../Section'
import profile from '@/assets/images/profile.jpg'

export default function Home() {
	return (
		<Section
			id="home"
			aria-labelledby="home_title"
			className="flex flex-col items-center justify-center gap-6 sm:flex-row md:gap-10"
		>
			<Image
				src={profile}
				alt="Hyren Yares"
				className="min-w-72 max-w-xs"
			/>

			<aside className="max-w-2xl space-y-4 md:space-y-6">
				<h1
					id="home_title"
					className="text-4xl font-extrabold md:text-5xl"
				>
					<span className="mb-1 block">Hello!</span>
					I'm <span className="text-amber-500">Hyren Yares</span>
				</h1>

				<p>
					An Information Technology Student Intern. Welcome to my portfolio!
					Here, you can explore my resume, certifications, and projects. Feel
					free to take a look around and discover what I've been working on!
				</p>
			</aside>
		</Section>
	)
}
