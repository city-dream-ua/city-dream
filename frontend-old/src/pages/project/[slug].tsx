import Head from 'next/head';

import { Project } from '../../components/project';
import { getProject, getProjects } from '@api';
import { FC } from 'react';
import { ProjectCardProps } from '@components';
import { GetStaticProps } from 'next';
import { projectsContext } from '@context';

type ProjectPageProps = {
  project: ProjectCardProps;
  projects: ProjectCardProps[];
}

const ProjectPage: FC<ProjectPageProps> = ({ projects, project }) => {

  return (
    <>
      <Head>
        <title>City dream | {project?.title || 'Project'}</title>
        <meta name="description" content="Project name"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <projectsContext.Provider value={{ projects, project }}>
        <Project/>
      </projectsContext.Provider>
    </>
  );
};

export const getStaticPaths = async () => {
  const projects = await getProjects();
  const paths = projects?.map(({ slug }) => ({
    params: { slug },
  })) || [];

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string | undefined;

  // TODO: cache projects after first request
  const projects = await getProjects();
  const project = slug ? await getProject(slug) : null;

  return {
    props: {
      project,
      projects,
    },
  };
};

export default ProjectPage;