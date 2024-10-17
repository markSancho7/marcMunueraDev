import { v4 } from 'uuid';

export const PROJECTS = [
	{
		id: v4(),
		projectName: 'WINE CARD',
		projectImg: 'public/vinosImg.png',
		decription:
			'A wine store project where the administrator, using their account, can add wines by writing a description and specifying characteristics like grape variety, year, color, etc. The administrator can also edit the wines after they have been uploaded and delete them. A regular user can view the wines in the store, and by clicking on a wine, they can see its description and add it to the cart.',
		linkGitHub: 'https://github.com/markSancho7/wine-aplication',
		linkWeb: '',
		tecnologies: [
			'Node.js',
			'React',
			'MongoDB',
			'Styled-Components',
			'React-Router'
		]
	},
	{
		id: v4(),
		projectName: '3 GAMES',
		projectImg: 'public/minGames.png',
		decription:
			'A mini-games project where we have a main screen to choose the game we want to play. Once one of the three games is selected, the game can begin.',
		linkGitHub: 'https://github.com/markSancho7/TFM-3-en-raya',
		linkWeb: 'https://3games.marcmunuera.com/',
		tecnologies: ['JavaScript', 'HTML', 'CSS']
	}
];
