import { StaticImageData } from 'next/image';

export type ResourceProps = {
  id: string;
  title: string;
  status: 'incomplete' | 'complete';
}

export type StepProps = {
  id: string;
  name: string;
  resources: ResourceProps[];
}

export type ProjectCardProps = {
  id: string;
  src: string | StaticImageData;
  alt: string;
  title: string;
  authorAvatar: string;
  authorFirstName: string;
  authorLastName: string;
  description: string;
  slug: string;
  steps: StepProps[];
}
