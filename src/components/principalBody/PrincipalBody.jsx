import { PROJECTS } from '../../constants/projects';
import {
	StyledArticleInfo,
	StyledArticleInfoImg,
	StyledArticleItems,
	StyledChangeBigSize,
	StyledChangeSize,
	StyledDescriptionBig,
	StyledDescriptionMedium,
	StyledDescriptionSmall,
	StyledItem,
	StyledPrincipalSection,
	StyledProjectCard,
	StyledProjectCardContainerButton,
	StyledProjectCardDescription,
	StyledProjectCardImg,
	StyledProjectCardLink,
	StyledProjectCardTitle,
	StyledProjectsSection,
	StyledTitle
} from './styles';

const PrincipalBody = () => {
	return (
		<>
			<StyledPrincipalSection>
				<article>
					<StyledDescriptionSmall>hi, my name is</StyledDescriptionSmall>
					<StyledDescriptionBig>
						Marcos Sancho <br />
						<StyledChangeSize>I`m looking for a </StyledChangeSize>challenge to
						build
					</StyledDescriptionBig>
					<StyledDescriptionMedium>
						I`m a <StyledChangeBigSize>full-stack</StyledChangeBigSize>{' '}
						developer specialized in{' '}
						<StyledChangeBigSize>frontend</StyledChangeBigSize> development,
						with a primary focus on utilizing{' '}
						<StyledChangeBigSize>React</StyledChangeBigSize> for building apps
						and websites.
					</StyledDescriptionMedium>
				</article>
				<StyledArticleItems>
					<StyledItem>
						<img src='public/jsIMG.svg' alt='' />
						<p>Jscript</p>
					</StyledItem>
					<StyledItem>
						<img src='public/reactIMG.svg' alt='' />
						<p>React</p>
					</StyledItem>
					<StyledItem>
						<img src='public/nodeIMG.svg' alt='' />
						<p>Node.js</p>
					</StyledItem>
				</StyledArticleItems>
				<StyledArticleInfo>
					<StyledArticleInfoImg src='public/linkedin-6f11330e.svg' alt='' />
					<StyledArticleInfoImg src='public/github-aec80ceb.svg' alt='' />
				</StyledArticleInfo>
			</StyledPrincipalSection>
			<br id='projects' />
			<StyledTitle>[ PROJECTS ]</StyledTitle>
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
						</div>
					</StyledProjectCard>
				))}
			</StyledProjectsSection>
		</>
	);
};
export default PrincipalBody;
