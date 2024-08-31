import { createContext, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type TopbarProps = React.ComponentProps<'header'>

export default function Topbar(props: TopbarProps) {
	const { className, ...rest } = props

	return (
		<header
			{...rest}
			className={twMerge(
				'sticky top-0 flex h-16 items-center bg-white px-4 shadow-md md:px-6',
				className,
			)}
			role="toolbar"
		/>
	)
}

Topbar.Brand = Brand

type BrandProps = Omit<React.ComponentProps<'div'>, 'children'> & {
	label: string
}

function Brand(props: BrandProps) {
	const { label, className, ...rest } = props

	return (
		<div
			{...rest}
			className={twMerge('text-2xl font-bold md:text-2xl', className)}
		>
			{label}
		</div>
	)
}

Topbar.Nav = Nav

type NavProps = React.ComponentProps<'nav'>

function Nav(props: NavProps) {
	const { className, ...rest } = props

	return (
		<nav
			{...rest}
			className={twMerge(
				'ml-auto hidden items-center gap-x-0.5 sm:flex',
				className,
			)}
		/>
	)
}

Topbar.NavLink = NavLink

type NavLinkProps = Omit<React.ComponentProps<'a'>, 'children'> & {
	label: string
}

function NavLink(props: NavLinkProps) {
	const { label, className, ...rest } = props

	return (
		<a
			{...rest}
			className={twMerge(
				'rounded-md px-2.5 py-3 text-sm font-medium transition-colors duration-200 hover:bg-black/10',
				className,
			)}
		>
			{label}
		</a>
	)
}

type MenuContextState = boolean

const MenuContext = createContext<MenuContextState>(false)

Topbar.Menu = Menu

type MenuProps = React.ComponentProps<'div'> & {
	label?: string
	icon?: React.ReactNode
}

function Menu(props: MenuProps) {
	const { label, icon, children, className, ...rest } = props

	const [opened, setOpened] = useState(false)

	const toggle = () => {
		setOpened((prev) => !prev)
	}

	return (
		<MenuContext.Provider value={opened}>
			<div
				{...rest}
				className={twMerge('relative', className)}
			>
				<button
					className="rounded-md p-1.5 transition-colors duration-200 hover:bg-black/10"
					onClick={toggle}
				>
					{label}
					{icon}
				</button>

				{children}
			</div>
		</MenuContext.Provider>
	)
}

Topbar.Dropdown = Dropdown

type DropdownProps = React.ComponentProps<'div'>

function Dropdown(props: DropdownProps) {
	const { className, ...rest } = props

	const opened = useContext(MenuContext)

	return opened ? (
		<div
			{...rest}
			className={twMerge(
				'absolute right-0 mt-1 flex min-w-56 flex-col rounded-md border bg-white p-1.5 shadow-lg',
				className,
			)}
		/>
	) : null
}

Topbar.DropdownLink = DropdownLink

type DropdownLinkProps = React.ComponentProps<'a'> & {
	label: string
	icon?: React.ReactNode
}

function DropdownLink(props: DropdownLinkProps) {
	const { label, icon, className, ...rest } = props

	return (
		<a
			{...rest}
			className={twMerge(
				'flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm transition-colors duration-200 hover:bg-black/10',
				className,
			)}
		>
			{icon}
			{label}
		</a>
	)
}
