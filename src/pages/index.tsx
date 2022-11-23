import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout/Layout";
import Hero from "../sections/Hero/Hero";
import Wrapper from "../components/Wrapper/Wrapper";
import SectionWithImage from "../sections/SectionWithImage/SectionWithImage";
import { SECTIONS_CONTENT as sections } from "../content";
import BottomSection from "../sections/BottomSection/BottomSection";
import Footer from '../sections/Footer/Footer';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Wrapper>
        {sections.map(({ id, title, paragraphs, textWithIcons, image }) => (
          <SectionWithImage
            key={id}
            title={title}
            paragraphs={paragraphs}
            image={image}
            textWithIcons={textWithIcons}
          ></SectionWithImage>
        ))}
      </Wrapper>
      <BottomSection />
      <Footer/>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
