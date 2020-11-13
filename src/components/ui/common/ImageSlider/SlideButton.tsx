import styled, { css } from "styled-components"
import { ButtonBack, ButtonNext } from "pure-react-carousel"
import { FiArrowLeftCircle, FiArrowRightCircle } from "@/components/Icon"

const shareStyle = css`
  width: 50px;
  height: 50px;
  border: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  transition: all 300ms;
  &:focus {
    outline: none;
  }

  /* Icon 사이즈 조절 */
  svg {
    font-size: 6rem;
  }

  &:disabled {
    opacity: 0;
  }
`

const BackButtonStyle = styled(ButtonBack)`
  ${shareStyle}
  left: 80px;
`

const NextButtonStyle = styled(ButtonNext)`
  ${shareStyle}
  right: 80px;
`

const BackButton: React.FC<any> = () => (
  <BackButtonStyle>
    <FiArrowLeftCircle />
  </BackButtonStyle>
)

const NextButton: React.FC<any> = () => (
  <NextButtonStyle>
    <FiArrowRightCircle />
  </NextButtonStyle>
)

export default {
  Next: NextButton,
  Back: BackButton,
}
