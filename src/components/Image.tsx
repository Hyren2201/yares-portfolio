import { twMerge } from 'tailwind-merge'
type ImageProps = React.ComponentProps<'img'>

export default function Image(props: ImageProps) {
	const { className, ...rest } = props

	return (
		<figure>
			<img
				{...rest}
				className={twMerge(
					'w-full overflow-clip rounded-xl border border-gray-200 shadow-lg transition-transform hover:scale-105 md:shadow-2xl',
					className,
				)}
			/>
		</figure>
	)
}
