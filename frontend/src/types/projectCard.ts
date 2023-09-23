import { StaticImageData } from 'next/image';

export type ResourceProps = {
  _id: string;
  title: string;
  status: 'incomplete' | 'complete';
}

export type StepProps = {
  _id: string;
  name: string;
  resources: ResourceProps[];
}

export type ProjectCardProps = {
  _id: string;
  title: string;
  alt: string;
  src: string | StaticImageData;
  authorAvatar: string;
  authorFirstName: string;
  authorLastName: string;
  description: string;
  slug: string;
  steps: StepProps[];
}
