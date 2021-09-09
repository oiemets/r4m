import styled from 'styled-components';
import logo from '../../assets/logo-white.png';
import { Title } from '../title';
import { Link } from 'react-router-dom';

const Root = styled.div`
	display: flex;
	align-items: center;
`;

const GraphLogo = styled.img`
	height: 108px;
	transform: rotateX(0deg);
	transition: all 0.7s;

	:hover {
		cursor: pointer;
		transform: rotateX(360deg);
	}
`;

export const Logo: React.FC = () => {
	return (
		<Root>
			<Link to='/home'>
				<GraphLogo alt='rfm logo' src={logo} />
			</Link>
			<Title />
		</Root>
	);
};
