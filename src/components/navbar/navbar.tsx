import styled from 'styled-components';

const Root = styled.div`
	background-color: #ebb710;
	width: 100%;
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	box-shadow: 0px 0px 10px rgb(0 0 0 / 40%);
	border-top: 10px solid black;
`;

const Ul = styled.ul``;

const Li = styled.li`
	display: inline-block;
	font: 600 20px/1.5 'Alumni Sans';
	text-transform: uppercase;
	color: black;
	padding: 0 7px;

	&:hover {
		background-color: #eee;
		cursor: pointer;
		color: #dd5d15;
	}

	&:active {
		color: #fff;
		background-color: transparent;
	}
`;

const menuMap = [
	'home',
	'about',
	'artists',
	'news',
	'store',
	'video',
	'contact',
];

export const NavBar: React.FC = () => {
	return (
		<Root>
			<Ul>
				{menuMap.map((item, index) => (
					<Li key={index}>{item}</Li>
				))}
			</Ul>
		</Root>
	);
};
