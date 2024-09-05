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
	StyledPrincipalSection
} from './styles';

const PrincipalBody = () => {
	return (
		<StyledPrincipalSection>
			<article>
				<StyledDescriptionSmall>hi, my name is</StyledDescriptionSmall>
				<StyledDescriptionBig>
					Marcos Sancho <br />
					<StyledChangeSize>I`m looking for a </StyledChangeSize>challenge to
					build
				</StyledDescriptionBig>
				<StyledDescriptionMedium>
					I`m a <StyledChangeBigSize>full-stack</StyledChangeBigSize> developer
					specialized in <StyledChangeBigSize>frontend</StyledChangeBigSize>{' '}
					development, with a primary focus on utilizing{' '}
					<StyledChangeBigSize>React</StyledChangeBigSize> for building apps and
					websites.
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
	);
};
export default PrincipalBody;
