import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
// import Accomplishments from '../components/Accomplishments/Accomplishments';

import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";

const Home = () => {
  return (
    <Layout>
      <Section grid center>
        <Hero />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
