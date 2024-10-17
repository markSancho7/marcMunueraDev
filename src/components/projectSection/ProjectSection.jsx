import { PROJECTS } from '../../constants/projects';
import {
	StyledContainerDescriptioStacks,
	StyledContainerTitleImg,
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
						<StyledContainerTitleImg>
							<StyledProjectCardTitle>
								{project.projectName}
							</StyledProjectCardTitle>
							<StyledProjectCardImg src={project.projectImg} alt='' />
						</StyledContainerTitleImg>
						<StyledContainerDescriptioStacks>
							<StyledProjectCardDescription>
								{project.decription}
							</StyledProjectCardDescription>
							<StyledProjectCardContainerButton>
								<StyledProjectCardLink href={project.linkGitHub}>
									<img src='public/github-aec80ceb.svg' alt='' />
									Github
								</StyledProjectCardLink>
								<StyledProjectCardLink href={project.linkWeb}>
									<img src='public/link-image-c2992ee1.svg' alt='' />
									Link
								</StyledProjectCardLink>
							</StyledProjectCardContainerButton>
							<StyledProjectCardContainerTecnologies>
								{project.tecnologies.map((tecnology, index) => (
									<StyledProjectCardTecnology key={index}>
										{tecnology}
									</StyledProjectCardTecnology>
								))}
							</StyledProjectCardContainerTecnologies>
						</StyledContainerDescriptioStacks>
					</StyledProjectCard>
				))}
			</StyledProjectsSection>
		</>
	);
};
export default ProjectSection;
