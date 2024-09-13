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
	margin-bottom: 300px;
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
	StyledArticleInfoImg
};
