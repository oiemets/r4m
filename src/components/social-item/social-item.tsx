import styled from 'styled-components';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import { Link } from 'react-router-dom';

export type SocialItemProps = {
	src: keyof typeof socialIcon;
	linkTo?: string;
};

export const socialIcon = {
	facebook,
	twitter,
	youtube,
};

const Img = styled.img`
	width: 20px;
	height: 20px;
	vertical-align: middle;
`;

const StyledLink = styled.div`
	background-color: #333;
	padding: 6px 7px 8px 7px;
	margin: 10px auto;
	opacity: 0.5;
	display: inline-block;
	text-align: center;
	height: auto;
	width: auto;
	border-radius: 50%;
	transition: all 0.7s;

	&:hover {
		background-color: #ebb710;
		opacity: 1;
		cursor: pointer;
	}
`;

export const SocialItem: React.FC<SocialItemProps> = ({ src, linkTo }) => {
	const img = (
		<StyledLink>
			<Img alt={src} src={socialIcon[src]} />
		</StyledLink>
	);
	return <>{linkTo ? <Link to={linkTo}>{img}</Link> : img}</>;
};
