import { PROJECTS } from '../../constants/projects';
import {
	StyledProjectCard,
	StyledProjectCardContainerButton,
	StyledProjectCardContainerTecnologies,
	StyledProjectCardDescription,
	StyledProjectCardImg,
	StyledProjectCardLink,
	StyledProjectCardTecnology,
	StyledProjectCardTitle,
	StyledProjectsSection,
	StyledTitle
} from './styles';

const ProjectSection = () => {
	return (
		<>
			<StyledTitle id='projects'>[ PROJECTS ]</StyledTitle>
			<StyledProjectsSection>
				{PROJECTS.map(project => (
					<StyledProjectCard key={project.id}>
						<StyledProjectCardImg src={project.projectImg} alt='' />
						<div>
							<StyledProjectCardTitle>
								{project.projectName}
							</StyledProjectCardTitle>
							<StyledProjectCardDescription>
								{project.decription}
							</StyledProjectCardDescription>
							<StyledProjectCardContainerButton>
								<StyledProjectCardLink href={project.linkGitHub}>
									<img src='public/github-aec80ceb.svg' alt='' />
									Github
								</StyledProjectCardLink>
							</StyledProjectCardContainerButton>
							<StyledProjectCardContainerTecnologies>
								{project.tecnologies.map((tecnology, index) => (
									<StyledProjectCardTecnology key={index}>
										{tecnology}
									</StyledProjectCardTecnology>
								))}
							</StyledProjectCardContainerTecnologies>
						</div>
					</StyledProjectCard>
				))}
			</StyledProjectsSection>
		</>
	);
};
export default ProjectSection;
