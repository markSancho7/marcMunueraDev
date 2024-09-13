import AboutMeSection from './components/aboutMeSection/AboutMeSection';
import ContactSection from './components/contactSection/ContactSection';
import NavBar from './components/navBar/NavBar';
import PrincipalBody from './components/principalBody/PrincipalBody';
import ProjectSection from './components/projectSection/ProjectSection';
import StacksSection from './components/stackSection/StacksSection';

const App = () => {
	return (
		<>
			<NavBar />
			<PrincipalBody />
			<ProjectSection />
			<AboutMeSection />
			<StacksSection />
			<ContactSection />
		</>
	);
};

export default App;
