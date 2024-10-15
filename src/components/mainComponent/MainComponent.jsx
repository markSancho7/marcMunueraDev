import AboutMeSection from '../aboutMeSection/AboutMeSection';
import ContactSection from '../contactSection/ContactSection';
import NavBar from '../navBar/NavBar';
import PrincipalBody from '../principalBody/PrincipalBody';
import ProjectSection from '../projectSection/ProjectSection';
import StacksSection from '../stackSection/StacksSection';
import { StyledMain } from './styles';

const MainComponent = () => {
	return (
		<StyledMain>
			<NavBar />
			<PrincipalBody />
			<ProjectSection />
			<AboutMeSection />
			<StacksSection />
			<ContactSection />
		</StyledMain>
	);
};
export default MainComponent;
