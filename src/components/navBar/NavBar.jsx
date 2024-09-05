import { NAVITEMS } from '../../constants/navItems';
import { StyledImg, StyledLi, StyledNav, StyledUl } from './style';

const NavBar = () => {
	return (
		<>
			<StyledNav>
				<StyledImg src='public/LogoMarcMunuera.png' alt='' />
				<StyledUl>
					{NAVITEMS.map(item => (
						<StyledLi key={item.id}>{item.itemName}</StyledLi>
					))}
				</StyledUl>
			</StyledNav>
		</>
	);
};
export default NavBar;
