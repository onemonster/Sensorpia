import styled from '@emotion/styled'
interface IProps {
  color?: any
  menuColor?: any
  sideBar?: any
  router?: any
  language?: any
}

export const HeaderBigWrapper = styled.div`
  width: 100vw;
  height: 87px;
  display: flex;
  box-shadow: ${(props: IProps) =>
    (props.sideBar || props.router.pathname === '/contactUs') &&
    '0px 2px 15px rgba(0,0,0, 0.15)'};
  z-index: 1;
  position: relative;
`

export const HeaderWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  padding: 0 70px;
`
export const SensorpiaLogoWrapper = styled.div`
  width: 139px;
  height: 27px;
`
export const SensorPiaLogo = styled.img`
  cursor: pointer;
`

export const MenusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 700;
`
export const MenuHome = styled.span`
  margin-right: 35px;
  cursor: pointer;
  color: ${(props: IProps) => (props.color === 'Home' ? '#0070c0' : '#9c9d9e')};
`
export const MenuProduct = styled.span`
  margin-right: 35px;
  color: ${(props: IProps) =>
    props.color === 'Product' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
`
export const MenuApplication = styled.span`
  margin-right: 35px;
  cursor: pointer;
  color: ${(props: IProps) =>
    props.color === 'Application' ? '#0070c0' : '#9c9d9e'};
`
export const MenuAboutUs = styled.span`
  margin-right: 35px;
  color: ${(props: IProps) =>
    props.color === 'AboutUs' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
`
export const MenuContactUs = styled.span`
  color: ${(props: IProps) =>
    props.color === 'ContactUs' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
  margin-right: 35px;
`
export const MenuCareers = styled.span`
  margin-right: 35px;
  color: ${(props: IProps) =>
    props.color === 'Careers' ? '#0070c0' : '#9c9d9e'};
  cursor: pointer;
`

export const LanguageChangeWrapper = styled.div`
  width: 121px;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LanguageEnglish = styled.div`
  width: 58px;
  height: 34px;
  border: 2px solid #9c9d9e;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  color: ${(props: IProps) => (props.color === 'en' ? '#ffffff' : '#9c9d9e')};
  cursor: pointer;
  background: ${(props: IProps) =>
    props.color === 'en' ? '#0070c0' : '#ffffff'};
`
export const LanguageKorean = styled.div`
  width: 58px;
  height: 34px;
  border: 2px solid #9c9d9e;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  color: ${(props: IProps) => (props.color === 'kor' ? '#ffffff' : '#9c9d9e')};
  cursor: pointer;
  background: ${(props: IProps) =>
    props.color === 'kor' ? '#0070c0' : '#ffffff'};
`
export const NavBarBigWrapper = styled.div`
  width: 100vw;
  height: 231px;
  position: absolute;
  z-index: 100;
  top: 87px;
`

export const NavBarWrapper = styled.div`
  width: 1100px;
  height: 231px;
  background: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
`

export const NavBarMainMenusWrapper = styled.div`
  left: ${(props: IProps) => (props.language === 'kor' ? '378px' : '462px')};
  top: 25px;
  width: ${(props: IProps) => (props.language === 'kor' ? '510px' : '418px')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`
export const NavBarMainMenu = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #262626;
`
export const NavBarMainMenuDetailWrapper = styled.div`
  position: relative;
  left: ${(props: IProps) => (props.language === 'kor' ? '378px' : '462px')};
  top: 37px;
  display: flex;
  flex-direction: row;
`
export const ProductDetailsWrapper = styled.div`
  max-width: 101px;
  display: flex;
  flex-direction: column;
`
export const ProductDetails = styled.span`
  margin-bottom: 15px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`
export const ApplicationsDetailsWrapper = styled.div`
  margin-left: ${(props: IProps) => (props.language === 'kor' ? '2px' : '2px')};
  max-width: ${(props: IProps) => (props.language === 'kor' ? '54px' : '81px')};
  display: flex;
  flex-direction: column;
`
export const ApplicationsDetails = styled.span`
  margin-bottom: 15px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`

export const AboutUsDetailsWrapper = styled.div`
  margin-left: ${(props: IProps) =>
    props.language === 'kor' ? '80px' : '49px'};
  max-width: ${(props: IProps) =>
    props.language === 'kor' ? '85px' : '110px'};
  display: flex;
  flex-direction: column;
`
export const AboutUsDetails = styled.span`
  margin-bottom: 25px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`
export const CareersDetailsWrapper = styled.div`
  margin-left: 20px;
  max-width: 63px;
  display: flex;
  flex-direction: column;
`
export const CareersDetails = styled.span`
  margin-bottom: 25px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${(props: IProps) => (props.menuColor ? '#0070c0' : '#6d6d6d')};
`
