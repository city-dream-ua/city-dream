import Head from 'next/head';

import { Project } from '@/components/project';
import { getProject, getProjects } from '@/api-utils';
import { FC } from 'react';
import { ProjectCardProps } from '@/types';
import { GetStaticProps } from 'next';
import { projectsContext } from '@/context';
import { Layout } from '@/components/layout';

type ProjectPageProps = {
  project: ProjectCardProps;
  projects: ProjectCardProps[];
}

const ProjectPage: FC<ProjectPageProps> = ({ projects, project }) => {
  const title = `City dream | ${project?.title || 'Project'}`;
  const description = project?.description || '';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${description}`}/>
        <meta property="og:image" content={project?.src as string}/>
        <meta property="og:title" content={title}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        <projectsContext.Provider value={{ projects, project }}>
          <Project/>
        </projectsContext.Provider>
      </Layout>
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
