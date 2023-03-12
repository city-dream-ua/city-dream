import { StaticImageData } from 'next/image';

export type TeamMember = {
  name: string;
  position: string;
  img: string | StaticImageData;
  fbLink: string;
}

export type CardMemberProps = TeamMember;
