import styled from 'styled-components';
import { SocialBar } from '../social-bar';
import { NavBar } from '../navbar';
import { Logo } from '../logo';

const Root = styled.div`
	min-height: 135px;
	display: flex;
	flex-flow: column nowrap;
`;

const UpperMenu = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	padding: 20px 10%;
`;

export const Header: React.FC = () => {
	return (
		<Root>
			<UpperMenu>
				<Logo />
				<SocialBar />
			</UpperMenu>
			<NavBar />
		</Root>
	);
};
