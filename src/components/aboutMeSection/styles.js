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
	width: 300px;
	padding-top: 0px;
`;

const StyledSection = styled.section`
	display: flex;
	width: 1200px;
	height: 680px;
	margin-inline: auto;
	padding: 50px;
`;
const StyledImg = styled.img`
	width: 600px;
	height: 400px;
`;
const StyledP = styled.p`
	width: 500px;
	height: 400px;
	color: white;
	padding-left: 20px;
	font-family: 'Mukta', sans-serif;
	font-size: 24px;
`;
const StyledChangeColor = styled.span`
	color: #9e9b00;
	font-weight: bold;
`;
export { StyledTitle, StyledSection, StyledImg, StyledP, StyledChangeColor };
