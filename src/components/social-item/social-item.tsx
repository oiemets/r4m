import styled from 'styled-components';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';

export type SocialItemProps = {
	src: keyof typeof socialIcon;
};

export const socialIcon = {
	facebook,
	twitter,
	youtube,
};

const socialLinks = {
	facebook: 'https://www.facebook.com/RoomForMoreMusic',
	twitter: 'https://twitter.com/',
	youtube: 'https://www.youtube.com/c/RoomForMore',
};

const Img = styled.img`
	width: 20px;
	height: 20px;
	vertical-align: middle;
`;

const StyledLink = styled.a`
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

export const SocialItem: React.FC<SocialItemProps> = ({ src }) => {
	return (
		<StyledLink href={socialLinks[src]}>
			<Img alt={src} src={socialIcon[src]} />
		</StyledLink>
	);
};
