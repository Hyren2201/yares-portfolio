import { useId } from 'react'
import { twMerge } from 'tailwind-merge'
type SectionProps = React.ComponentProps<'section'> & {
	title?: string
	subtitle?: string
}

export default function Section(props: SectionProps) {
	const { title, subtitle, children, className, ...rest } = props

	const labelId = useId()

	return (
		<section
			{...rest}
			aria-labelledby={title ? labelId : undefined}
			className={twMerge('space-y-4 py-14 md:space-y-6 md:py-20', className)}
		>
			{title && (
				<header className="space-y-3 text-center">
					<h2
						id={labelId}
						className="text-3xl font-bold md:text-4xl"
					>
						{title}
					</h2>

					{subtitle && (
						<p className="text-xs font-bold uppercase text-amber-500">
							{subtitle}
						</p>
					)}
				</header>
			)}

			{children}
		</section>
	)
}
