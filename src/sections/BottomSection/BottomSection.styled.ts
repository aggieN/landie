import styled from "styled-components";
import theme from "../../themes/theme";

export const Divider = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${theme.colors.white};
  clip-path: ellipse(50% 65% at 50% 0%);
`;
export const OuterWrapper = styled.div`
  width: 100%;
  background-color: rgba(231, 236, 255, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 100px 0;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 120px 0;
  }
  @media (min-width: ${theme.breakpoints.xl}) {
    padding: 170px 0;
  }
`;

export const Price = styled.span`
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.medium};
  line-height: 66px;
  color: ${theme.colors.mainBlue700};
  margin-top: 35px;
  margin-bottom: -8px;
`;

export const SmallText = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.regular};
  line-height: 24px;
  color: ${theme.colors.grey600};
  margin-top: 60px;
  margin-bottom: 9px;
`;
