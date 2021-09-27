import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../pages/_app'
import ApplicationUI from './Application.presenter'

const ApplicationComponet = () => {
  const { menu, setMenu, language } = useContext(GlobalContext)
  const [finalRandomImage, setFinalRandomImage] = useState('')
  const data = require(`../../../pages/api/${language}.json`)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/application') {
      setMenu('Defense')
    }
    function RandomImage() {
      const Images = ['./DefenseRandomOne.svg', './DefenseRandomTwo.svg']
      const RandomImageOne = Math.floor(Math.random() * Images.length)
      const RandomImage = Images[RandomImageOne]
      setFinalRandomImage(RandomImage)
    }
    RandomImage()
  }, [router.pathname, setMenu])
  return (
    <ApplicationUI
      finalRandomImage={finalRandomImage}
      menu={menu}
      data={data}
    />
  )
}

export default ApplicationComponet
