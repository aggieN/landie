import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  Divider,
  InnerWrapper,
  OuterWrapper,
  Price,
  SmallText,
} from "./BottomSection.styled";
import {
  BOTTOM_SECTION_TITLE,
  BOTTOM_SECTION_TEXT,
  BOTTOM_SECTION_PRICE,
  BOTTOM_SECTION_PRICE_TEXT,
  BOTTOM_SECTION_SMALL_TEXT,
} from "../../content";
import Text from "../../components/Text/Text";
import Wrapper from "../../components/Wrapper/Wrapper";
import theme from "../../themes/theme";
import Button from "../../components/Button/Button";

const BottomSection = () => {
  return (
    <OuterWrapper>
      <Divider />
      <Wrapper>
        <InnerWrapper>
          <SectionTitle align="center">{BOTTOM_SECTION_TITLE}</SectionTitle>
          <Text size="sm" color={theme.colors.grey600} align="center">
            {BOTTOM_SECTION_TEXT}
          </Text>
          <Price>{BOTTOM_SECTION_PRICE}</Price>
          <Text size="sm" color={theme.colors.mainBlue600} align="center">
            {BOTTOM_SECTION_PRICE_TEXT}
          </Text>
          <SmallText>{BOTTOM_SECTION_SMALL_TEXT}</SmallText>
          <Button label="Purchase Now" size="md" width="189px" />
        </InnerWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

export default BottomSection;
