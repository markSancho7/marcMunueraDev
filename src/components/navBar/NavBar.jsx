import { NAVITEMS } from '../../constants/navItems';
import { StyledImg, StyledLi, StyledNav, StyledNavA, StyledUl } from './style';

const NavBar = () => {
	return (
		<>
			<StyledNav>
				<StyledImg src='public/LogoMarcMunuera.png' alt='' />

				<StyledUl>
					<img src='' alt='' />

					{NAVITEMS.map(item => (
						<StyledLi key={item.id}>
							<StyledNavA href={item.itemId}>{item.itemName}</StyledNavA>
						</StyledLi>
					))}
				</StyledUl>
			</StyledNav>
		</>
	);
};
export default NavBar;
