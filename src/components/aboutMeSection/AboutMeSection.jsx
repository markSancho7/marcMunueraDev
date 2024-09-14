import {
	StyledChangeColor,
	StyledImg,
	StyledP,
	StyledSection,
	StyledTitle
} from './styles';

const AboutMeSection = () => {
	return (
		<>
			<StyledTitle id='aboutMe'>[ ABOUT ME ]</StyledTitle>
			<StyledSection>
				<StyledImg src='public/projectmanagement.jpg' alt='' />
				<StyledP>
					Im a{' '}
					<StyledChangeColor>
						{' '}
						full-stack developer currently focused on the frontend,
					</StyledChangeColor>{' '}
					where I specialize in creating user experiences that are both
					functional and visually appealing.{' '}
					<StyledChangeColor>I primarily use React</StyledChangeColor> to
					develop dynamic interfaces that strike a balance between logic and
					intuitive design, ensuring that each solution not only works well but
					is also easy to use. Although{' '}
					<StyledChangeColor>React is my main tool</StyledChangeColor>, I adapt
					my approach based on the specific needs of each project,
					<StyledChangeColor>
						{' '}
						integrating other libraries or technologies when I find them
						beneficial
					</StyledChangeColor>
					. I strive to write clean, well-structured code because I strongly
					believe that organized code is essential for{' '}
					<StyledChangeColor>
						long-term maintainability and scalability.
					</StyledChangeColor>
				</StyledP>
			</StyledSection>
		</>
	);
};
export default AboutMeSection;
