import React, { FC } from "react";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  Icon,
  Image,
  ImageContainer,
  TextContainer,
  TextWithIcon,
  TextWithIconsContainer,
  Title,
  Wrapper,
} from "./SectionWithImage.styled";
import Text from "../../components/Text/Text";
import theme from "../../themes/theme";

interface textWithIconsContent {
  id: number;
  icon: string;
  title: string;
  text: string;
}

type SectionWithImageProps = {
  title: string;
  paragraphs: string[];
  image: string;
  textWithIcons?: textWithIconsContent[];
};
const SectionWithImage: FC<SectionWithImageProps> = ({
  title,
  paragraphs,
  textWithIcons,
  image,
}) => {
  return (
    <Wrapper>
      <TextContainer>
        <SectionTitle>{title}</SectionTitle>
        {paragraphs.map((paragraph) => (
          <Text key={paragraph} color={theme.colors.grey600} size="sm">
            {paragraph}
          </Text>
        ))}
        {textWithIcons && (
          <TextWithIconsContainer>
            {textWithIcons.map(({ id, icon, title, text }) => (
              <TextWithIcon key={id}>
                <Icon src={icon} alt="" />
                <Title>{title}</Title>
                <Text size="xs" color={theme.colors.grey600}>
                  {text}
                </Text>
              </TextWithIcon>
            ))}
          </TextWithIconsContainer>
        )}
      </TextContainer>
      <ImageContainer>
        <Image src={image} alt="" />
      </ImageContainer>
    </Wrapper>
  );
};

export default SectionWithImage;
