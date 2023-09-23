import { ProjectCardProps } from '@/types/projectCard';

const API_BASE = process.env.API_BASE;

export const addApiBase = (url: string) => {
  return `${API_BASE}${url}`;
};

export const setToken = (token: string) => ({ Authorization: `Bearer ${token}` });

export const getProjects = async (token?: string): Promise<ProjectCardProps[] | null> => {
  return await fetch(`${API_BASE}/dreams`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then(data => data.json())
    .catch(err => console.error(err)) || null;
};

export const getProject = async (slug: string, token?: string): Promise<ProjectCardProps | null> => {
  return await fetch(`${API_BASE}/dreams/${slug}`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })
    .then(data => data.json())
    .catch(err => console.error(err)) || null;
};
