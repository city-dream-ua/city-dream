import { TrelloProjectCardProps } from './types';
import projectImage from '@/mocks/images/project-image-mock.png';
import { StepProps, ProjectCardProps } from '@/types/projectCard';

const normalizeTrelloData = (
  {
    ID,
    Title,
    CoverImage,
    Description,
    ShortLink,
    Owner: {
      FirstName: {
        String: firstName,
      },
      LastName: {
        String: lastName,
      },
      Avatar: {
        String: avatar,
      },
    },
    Resources,
  }: TrelloProjectCardProps): ProjectCardProps => {
  const steps: Omit<StepProps, 'resources'>[] = [];

  Resources.forEach(resource => {
    const stepName = resource?.DreamStage?.Name;

    if (stepName && !steps.some(({ name }) => name === stepName)) {
      steps.push({
        name: stepName,
        id: resource?.DreamStage?.Name,
      });
    }
  });

  return {
    id: ID,
    title: Title,
    alt: Title,
    src: CoverImage || projectImage,
    authorAvatar: avatar,
    authorFirstName: firstName,
    authorLastName: lastName,
    description: Description,
    slug: ShortLink,
    steps: steps.map(({ name, ...restProps }) => ({
      ...restProps,
      name,
      resources: Resources.flatMap(resource => {
        return resource?.DreamStage?.Name === name
          ? [{
            id: resource?.ID,
            title: resource?.Title,
            status: resource?.Status,
          }]
          : [];
      }),
    })),
  };
};

const API_BASE = process.env.API_BASE;
const API_STATIC = process.env.API_STATIC;

export const addApiBase = (url: string) => {
  return `${API_BASE}${url}`
}

export const setToken = (token: string) => ({ Authorization: `Bearer ${token}`, })


export const getProjects = async (token?: string): Promise<ProjectCardProps[] | null> => {
  const res: TrelloProjectCardProps[] = await fetch(`${API_STATIC}/dreams.json`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then(data => data.json())
    .catch(err => console.error(err));

  return res?.map(normalizeTrelloData) || null;
};

export const getProject = async (slug: string, token?: string): Promise<ProjectCardProps | null> => {
  const res: TrelloProjectCardProps = await fetch(`${API_STATIC}/dreams/${slug}.json`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then(data => data.json())
    .catch(err => console.error(err));

  return res ? normalizeTrelloData(res) : null;
};

// TODO: make all request with header
// TODO: add button that upload data from trello (only for admin)
// TODO: api refactoring
