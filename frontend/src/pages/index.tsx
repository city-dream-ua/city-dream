import { Home } from '@/components';
import { getProjects } from '@/api-utils';
import { Layout } from '@/components/layout';
import { ProjectCardProps } from '@/types';

type HomePageProps = {
  projects: ProjectCardProps[];
}

function HomePage({ projects }: HomePageProps) {
  return (
    <div>
      <Layout>
        <Home projects={projects}/>
      </Layout>
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
