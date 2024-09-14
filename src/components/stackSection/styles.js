import styled from 'styled-components';

const StyledTitle = styled.p`
	font-family: 'Mukta', sans-serif;
	margin-top: 80px;
	color: #9e9b00;
	font-weight: bold;
	font-size: 50px;
	text-align: center;
	display: block;
	margin-inline: auto;
	width: 400px;
	padding-top: 0px;
`;
const StyledContainerLogos = styled.div`
	width: 1200px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-inline: auto;
	gap: 30px;
	margin-top: 70px;
`;
const StyledLogo = styled.img`
	width: 90px;
	height: 90px;
	padding: 10px;
	box-shadow: 0 0 10px 0px ${({ $colorBorder }) => $colorBorder};
	border-radius: 20px;
	opacity: 0.7;

	&:hover {
		width: 90px;
		height: 90px;
		border-radius: 20px;
		padding: 10px;
		box-shadow: 0 0 20px 2px ${({ $colorBorder }) => $colorBorder};
		opacity: 1;
	}
`;

export { StyledTitle, StyledLogo, StyledContainerLogos };
