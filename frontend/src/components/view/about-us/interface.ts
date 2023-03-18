import { StaticImageData } from 'next/image';

export type TeamMember = {
  name: string;
  position: string;
  workPlace: string;
  workLink: string;
  img: string | StaticImageData;
  fbLink: string;
}

export type CardMemberProps = TeamMember;
