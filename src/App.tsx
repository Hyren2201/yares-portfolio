import Certificates from './components/partials/Certificates'
import ContactMe from './components/partials/ContactMe'
import Header from './components/partials/Header'
import Home from './components/partials/Home'
import Projects from './components/partials/Projects'
import Resume from './components/partials/Resume'

export default function App() {
	return (
		<>
			<Header />

			<main className="container divide-y">
				<Home />

				<Resume />

				<Certificates />

				<Projects />

				<ContactMe />
			</main>

			<footer className="flex h-16 items-center justify-center border-t border-t-gray-300 px-4 text-sm">
				<p>Copyright &copy; {new Date().getFullYear()}</p>
			</footer>
		</>
	)
}
