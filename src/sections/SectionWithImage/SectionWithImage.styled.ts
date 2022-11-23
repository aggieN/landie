import styled from "styled-components";
import theme from "../../themes/theme";

export const Wrapper = styled.div`
  display: flex;
  padding: 60px 0;
  flex-direction: column;
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 120px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    padding: 160px 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 48%;
    margin-bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 48%;
  }
`;

export const TextWithIconsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  justify-content: space-between;
`;

export const TextWithIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

export const Title = styled.p`
  font-size: ${theme.fontSizes.sm};
  line-height: 26px;
  color: ${theme.colors.grey700};
  font-weight: ${theme.fontWeights.medium};
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: ${theme.breakpoints.md}) {
    width: 80%;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 100%;
  }
`;
