import styled from 'styled-components';

const StyledTitle = styled.p`
	font-family: 'Mukta', sans-serif;
	margin-top: 0px;
	color: #9e9b00;
	font-weight: bold;
	font-size: 50px;
	text-align: center;
	display: block;
	margin-inline: auto;
	width: 1200px;
	padding-top: 100px;
`;
const StyledProjectsSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	width: 1200px;
	height: 1200px;
	margin-inline: auto;
	margin-top: 50px;
`;
const StyledProjectCard = styled.article`
	display: flex;
	width: 1200px;
	height: 900px;
	padding: 50px;
	gap: 20px;
	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: center;
		width: 850px;
		margin-left: auto;
		margin-right: auto;
		height: 800px;
		padding-top: 0;
	}
`;
const StyledProjectCardImg = styled.img`
	width: 500px;
	height: 350px;
	margin-top: 25px;
	opacity: 0.9;
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
const StyledProjectCardContainerTecnologies = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 20px;
`;
const StyledProjectCardTecnology = styled.p`
	align-content: center;
	width: auto;
	padding-inline: 20px;
	height: 30px;
	background-color: #9e9b00;
	opacity: 0.8;
	color: black;
	font-weight: bold;
	border-radius: 10px 10px 10px 0px;
`;
export {
	StyledProjectsSection,
	StyledTitle,
	StyledProjectCard,
	StyledProjectCardImg,
	StyledProjectCardTitle,
	StyledProjectCardDescription,
	StyledProjectCardLink,
	StyledProjectCardContainerButton,
	StyledProjectCardContainerTecnologies,
	StyledProjectCardTecnology
};
