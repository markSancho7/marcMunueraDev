import styled from 'styled-components';

const StyledTitle = styled.p`
	font-family: 'Mukta', sans-serif;
	margin-bottom: 100px;
	color: #9e9b00;
	font-weight: bold;
	font-size: 50px;
	text-align: center;
	display: block;
	margin-inline: auto;
	width: 300px;
	padding-top: 100px;
`;

const StyledSection = styled.section`
	display: flex;
	width: 1200px;
	height: 680px;
	margin-inline: auto;
	@media (max-width: 1200px) {
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
	}
`;
const StyledImg = styled.img`
	width: 600px;
	height: 550px;
	border-radius: 20px;
	@media (max-width: 1200px) {
		width: 750px;
		height: 700px;
	}
`;
const StyledP = styled.p`
	width: 500px;
	height: 400px;
	color: white;
	padding-left: 20px;
	font-family: 'Mukta', sans-serif;
	font-size: 24px;
	@media (max-width: 1200px) {
		width: 780px;
		text-align: center;
	}
`;
const StyledChangeColor = styled.span`
	color: #9e9b00;
	font-weight: bold;
`;
export { StyledTitle, StyledSection, StyledImg, StyledP, StyledChangeColor };
