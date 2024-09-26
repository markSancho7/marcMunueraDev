import { useState } from 'react';
import { NAVITEMS } from '../../constants/navItems';
import {
	StyledImg,
	StyledimgHambur,
	StyledLi,
	StyledNav,
	StyledNavA,
	StyledUl
} from './style';

const NavBar = () => {
	const [visibleMenu, setVisibleMenu] = useState(true);
	console.log(visibleMenu);

	return (
		<>
			<StyledNav>
				<StyledImg src='public/LogoMarcMunuera.png' alt='' />
				<StyledimgHambur
					src='public/menuHamb.png'
					onClick={() => hideMenu(visibleMenu, setVisibleMenu)}
				></StyledimgHambur>
				<StyledUl $visibleMenu={visibleMenu}>
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

const hideMenu = (visibleMenu, setVisibleMenu) => {
	setVisibleMenu(!visibleMenu);
};
