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
`;
const StyledimgHambur = styled.img`
	width: 50px;
	position: absolute;
	top: 10px;
	filter: invert(1);
	display: none;
	@media (max-width: 768px) {
		display: block;
		position: sticky;
		right: 0;
	}
`;
const StyledUl = styled.ul`
	display: flex;
	gap: 20px;
	list-style: none;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		font-size: 20px;
		display: ${({ $visibleMenu }) => ($visibleMenu ? 'none' : 'block')};
	}
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
