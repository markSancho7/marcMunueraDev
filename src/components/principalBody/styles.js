import styled from 'styled-components';

const StyledPrincipalSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 1000px;
	margin-inline: auto;
	font-family: 'Mukta', sans-serif;
	margin-top: 250px;
	color: white;
`;
const StyledDescriptionSmall = styled.p`
	font-size: 30px;
	font-weight: bold;
`;
const StyledDescriptionMedium = styled.p`
	font-size: 30px;
	font-weight: bold;
	line-height: 35px;
	margin-top: 60px;
`;
const StyledDescriptionBig = styled.p`
	font-size: 60px;
	font-weight: bold;
	line-height: 60px;
	margin-top: 10px;
	color: #9e9b00;
`;
const StyledChangeSize = styled.span`
	font-size: 30px;
	font-weight: bold;
	color: white;
`;
const StyledChangeBigSize = styled.span`
	color: #9e9b00;
	font-size: 45px;
`;
const StyledArticleItems = styled.article`
	display: flex;
	justify-content: center;
	gap: 30px;
	margin-top: 50px;
`;
const StyledItem = styled.div`
	display: flex;
	align-items: end;
	gap: 5px;
	font-size: 25px;
`;
const StyledArticleInfo = styled.article`
	display: flex;
	justify-content: center;
	margin-top: 150px;
	gap: 10px;
`;
const StyledArticleInfoImg = styled.img`
	width: 50px;
`;
const StyledTitle = styled.p`
	font-family: 'Mukta', sans-serif;
	margin-top: 320px;
	color: #9e9b00;
	font-weight: bold;
	font-size: 50px;
	text-align: center;
	display: block;
	margin-inline: auto;
	width: 300px;
`;
const StyledProjectsSection = styled.section`
	color: white;
	width: 1200px;
	height: 1200px;
	margin-inline: auto;
	margin-top: 50px;
`;
const StyledProjectCard = styled.article`
	display: flex;
	width: 1200px;
	height: 500px;
	padding: 50px;
	gap: 20px;
`;
const StyledProjectCardImg = styled.img`
	width: 600px;
	height: 350px;
`;
const StyledProjectCardTitle = styled.p`
	font-family: 'Mukta', sans-serif;
	color: #9e9b00;
	font-weight: bold;
	font-size: 50px;
`;
const StyledProjectCardDescription = styled.p`
	font-family: 'Mukta', sans-serif;
	color: white;
	font-size: 20px;
`;
const StyledProjectCardContainerButton = styled.div`
	display: flex;
	justify-content: start;
	gap: 20px;
	margin-top: 40px;
`;

const StyledProjectCardLink = styled.a`
	font-family: 'Mukta', sans-serif;
	background-color: transparent;
	border: 3px solid #9e9b00;
	font-size: 20px;
	font-weight: bold;
	color: #9e9b00;
	display: flex;
	justify-content: center;
	gap: 10px;
	padding: 10px 20px;
	border-radius: 20px;
	text-decoration: none;
`;

export {
	StyledPrincipalSection,
	StyledDescriptionSmall,
	StyledDescriptionMedium,
	StyledDescriptionBig,
	StyledChangeSize,
	StyledChangeBigSize,
	StyledArticleItems,
	StyledItem,
	StyledArticleInfo,
	StyledArticleInfoImg,
	StyledProjectsSection,
	StyledTitle,
	StyledProjectCard,
	StyledProjectCardImg,
	StyledProjectCardTitle,
	StyledProjectCardDescription,
	StyledProjectCardLink,
	StyledProjectCardContainerButton
};
