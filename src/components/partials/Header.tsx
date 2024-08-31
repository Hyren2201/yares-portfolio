import Topbar from '../Topbar'
import {
	IconCertificate,
	IconChecklist,
	IconFilePencil,
	IconHome,
	IconMenu2,
	IconPhoneCall,
} from '@tabler/icons-react'

export default function Header() {
	return (
		<Topbar>
			<Topbar.Brand label="Portfolio" />

			<Topbar.Nav>
				<Topbar.NavLink
					label="Home"
					href="#home"
				/>

				<Topbar.NavLink
					label="Resume"
					href="#resume"
				/>

				<Topbar.NavLink
					label="Certificates"
					href="#certificates"
				/>

				<Topbar.NavLink
					label="Projects"
					href="#projects"
				/>

				<Topbar.NavLink
					label="Contact Me"
					href="#contact_me"
				/>
			</Topbar.Nav>

			<Topbar.Menu
				icon={<IconMenu2 />}
				className="ml-auto sm:hidden"
			>
				<Topbar.Dropdown>
					<Topbar.DropdownLink
						label="Home"
						href="#home"
						icon={<IconHome size={22} />}
					/>

					<Topbar.DropdownLink
						label="Resume"
						href="#resume"
						icon={<IconFilePencil size={22} />}
					/>

					<Topbar.DropdownLink
						label="Certificates"
						href="#certificates"
						icon={<IconCertificate size={22} />}
					/>

					<Topbar.DropdownLink
						label="Projects"
						href="#projects"
						icon={<IconChecklist size={22} />}
					/>

					<Topbar.DropdownLink
						label="Contact Me"
						href="#contact_me"
						icon={<IconPhoneCall size={22} />}
					/>
				</Topbar.Dropdown>
			</Topbar.Menu>
		</Topbar>
	)
}
