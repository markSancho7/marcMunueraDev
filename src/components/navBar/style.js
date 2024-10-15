import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	padding-inline: 50px;
	padding-block: 20px;
	font-family: 'Mukta', sans-serif;
	font-weight: 500;
	font-style: normal;
	font-size: 25px;
	background-color: black;
	opacity: 0.7;
	width: 1200px;
	margin-inline: auto;
`;
const StyledimgHambur = styled.img`
	width: 50px;
	position: absolute;
	top: 10px;
	filter: invert(1);
	display: none;
`;
const StyledUl = styled.ul`
	display: flex;
	gap: 20px;
	list-style: none;
	justify-content: center;
	align-items: center;
`;

const StyledLi = styled.li`
	text-decoration: none;
	color: #d2d80d;
`;
const StyledNavA = styled.a`
	text-decoration: none;
	color: #d2d80d;
`;

const StyledImg = styled.img`
	width: 250px;
`;

export {
	StyledImg,
	StyledNav,
	StyledUl,
	StyledLi,
	StyledNavA,
	StyledimgHambur
};
