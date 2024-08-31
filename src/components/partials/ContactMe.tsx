import Section from '../Section'
import um from '@/assets/images/logo_um.png'
import cce from '@/assets/images/logo_cce.png'

export default function ContactMe() {
	return (
		<Section
			id="contact_me"
			title="Contact Me"
		>
			<div className="!mt-12 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-3">
				<section>
					<figure>
						<img
							src={um}
							alt="University of Mindanao"
							className="aspect-square max-w-56"
						/>
					</figure>
				</section>

				<section className="order-last space-y-4 text-center sm:order-none">
					<h3 className="text-2xl font-bold text-amber-500 md:text-3xl">
						Hyren Yares
					</h3>

					<div className="space-y-2">
						<p>BS Information Technology</p>
						<p>h.yares.513944@umindanao.edu.ph</p>
						<p>0998-237-5097</p>
					</div>
				</section>

				<section>
					<figure>
						<img
							src={cce}
							alt="College of Computing Education"
							className="aspect-square max-w-56"
						/>
					</figure>
				</section>
			</div>
		</Section>
	)
}
