import { TECNOLOGIES } from '../../constants/tecnologies';
import { StyledContainerLogos, StyledLogo, StyledTitle } from './styles';

const StacksSection = () => {
	return (
		<>
			<StyledTitle id='stack'>[ TECNOLOGIES ]</StyledTitle>
			<StyledContainerLogos>
				{TECNOLOGIES.map(tecnologie => (
					<StyledLogo
						key={tecnologie.id}
						$colorBorder={tecnologie.color}
						src={tecnologie.logo}
						alt=''
					/>
				))}
			</StyledContainerLogos>
		</>
	);
};
export default StacksSection;
