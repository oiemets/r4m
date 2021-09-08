import styled from 'styled-components';
import logo from '../../assets/logo2.png';

const Root = styled.div`
	background-color: #333333;
	min-height: 135px;
	display: flex;
	align-items: center;
`;

const Title = styled.h1`
	color: #fff;
	font: 600 64px 'Josefin Sans';
	text-transform: uppercase;
`;
const Span = styled.span`
	color: #ebb710;
	font-size: 74px;
`;

const SubTitle = styled.h2`
	color: #949393;
	font: 700 54px 'Josefin Sans';
	text-transform: uppercase;
`;

const Logo = styled.img`
	height: 120px;
	transform: rotateX(0deg);
	transition: all 0.7s;

	:hover {
		cursor: pointer;
		transform: rotateX(360deg);
		/* -webkit-transform: rotateX(360deg); */
	}
`;

export const Header: React.FC = () => {
	return (
		<Root>
			<Logo alt='logo' src={logo} />
			<Title>
				room<Span>4</Span>more
				<SubTitle>music</SubTitle>
			</Title>
		</Root>
	);
};
