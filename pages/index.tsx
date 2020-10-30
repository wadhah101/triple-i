import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/home/Banner'
import Description from '../components/pages/home/Description'
import Schedule from '../components/pages/home/Schedule'
import Speakers from '../components/pages/home/Speakers'
import Standing from '../components/pages/home/Standing'
// import PictureSeparator from '../components/pages/home/PictureSeparator'
import BasePage from '../components/shared/BasePage'

// const p1 = ['/home/pic1.webp', '/home/pic2.webp']

export const Home: NextPage = () => {
  return (
    <BasePage>
      <Banner />
      <Description />
      <Standing />
      <Speakers />
      <Schedule />
      {/* <PictureSeparator pictures={p1} /> */}
    </BasePage>
  )
}

export default Home
