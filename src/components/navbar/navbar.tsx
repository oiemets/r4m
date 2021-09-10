import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Root = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ebb710;
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	box-shadow: 0px 0px 10px rgb(0 0 0 / 40%);
	border-top: 10px solid black;
`;

const Ul = styled.ul`
	margin-left: 25%;
`;

const Li = styled.li`
	display: inline-block;
	font: 700 14px/3 'Roboto';
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
					<Link key={item + index} to={`${item === 'home' ? `/` : `/${item}`}`}>
						<Li key={index}>{item}</Li>
					</Link>
				))}
			</Ul>
		</Root>
	);
};
