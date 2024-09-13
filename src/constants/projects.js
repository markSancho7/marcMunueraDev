import { v4 } from 'uuid';

export const PROJECTS = [
	{
		id: v4(),
		projectName: 'WINE CARD',
		projectImg: 'public/projectmanagement.jpg',
		decription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio accusantium fugiat illum quasi amet animi voluptatem voluptatibus quo incidunt qui et modi debitis porro quisquam voluptates voluptas neque quia?',
		linkGitHub: 'https://github.com/markSancho7/wine-aplication',
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
		projectName: '4 GAMES',
		projectImg: 'public/projectmanagement.jpg',
		decription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio accusantium fugiat illum quasi amet animi voluptatem voluptatibus quo incidunt qui et modi debitis porro quisquam voluptates voluptas neque quia?',
		linkGitHub: 'https://github.com/markSancho7/TFM-3-en-raya',
		tecnologies: ['JavaScript', 'HTML', 'CSS']
	}
];
