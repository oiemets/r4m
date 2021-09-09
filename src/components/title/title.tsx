import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Root = styled(Link)`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	text-decoration: none;
	color: inherit;

	&:hover {
		cursor: pointer;
	}
`;

const H1 = styled.h1`
	color: #fff;
	font: 600 64px 'Josefin Sans';
	text-transform: uppercase;
`;
const Span = styled.span`
	color: #ebb710;
	font-size: 74px;
`;

const H2 = styled.h2`
	color: #949393;
	font: 700 54px 'Josefin Sans';
	text-transform: uppercase;
`;

export const Title: React.FC = () => {
	return (
		<Root to='/home'>
			<H1>
				room<Span>4</Span>more
			</H1>
			<H2>music</H2>
		</Root>
	);
};
