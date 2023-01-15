import type { NextPage } from 'next';
import Head from 'next/head';

import { Home, ProjectCardProps } from '@/components';
import { getProjects } from '@/api-utils';

type HomePageProps = {
  projects: ProjectCardProps[];
}

function HomePage({ projects }: HomePageProps) {

  return (
    <div>
      <Head>
        <title>City dream</title>
        <meta name="description" content="City dream"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Home projects={projects}/>
    </div>
  );
};

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};

export default HomePage;
