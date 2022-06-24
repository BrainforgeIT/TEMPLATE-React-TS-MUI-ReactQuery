import { FC } from 'react';
import ArrowLeft from '../../../../assets/icons/double_arrow_left.svg';
import ArrowRight from '../../../../assets/icons/double_arrow_right.svg';
import { StyledArrowWrapper } from './SliderArrow.Elements';

export const SliderArrowLeft: FC = () => {
  return (
    <StyledArrowWrapper className="flex-center">
      <img src={ArrowLeft} alt="<<" />
    </StyledArrowWrapper>
  );
};

export const SliderArrowRight: FC = () => {
  return (
    <StyledArrowWrapper className="flex-center">
      <img src={ArrowRight} alt=">>" />
    </StyledArrowWrapper>
  );
};
