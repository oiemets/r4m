import styled from 'styled-components';
import { SocialItem, socialIcon } from '../social-item';

type Src = keyof typeof socialIcon;

const socialItems: Array<Src> = ['facebook', 'twitter', 'youtube'];

const Root = styled.div`
	display: flex;
	gap: 5px;
`;

export const SocialBar: React.FC = () => {
	return (
		<Root>
			{socialItems.map((s, i) => (
				<SocialItem src={s} key={s[i]} />
			))}
		</Root>
	);
};
