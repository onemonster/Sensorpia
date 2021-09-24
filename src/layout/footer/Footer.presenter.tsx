import {
  FooterAddressDetailWrapper,
  FooterDivider,
  FooterLogoWrapper,
  FooterOthersOne,
  FooterOtherTwo,
  FooterWrapper,
} from './Footer.styles'
interface IProps {
  data: any
}
const FooterUI = ({ data }: IProps) => {
  return (
    <FooterWrapper>
      <FooterLogoWrapper />
      <FooterAddressDetailWrapper>
        {data.footer.Address}
      </FooterAddressDetailWrapper>
      <FooterOthersOne>{data.footer.Others[0]}</FooterOthersOne>
      <FooterDivider />
      <FooterOtherTwo>{data.footer.Others[1]}</FooterOtherTwo>
    </FooterWrapper>
  )
}

export default FooterUI