import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/home/Banner'
import Description from '../components/pages/home/Description'
import Schedule from '../components/pages/home/Schedule'
import Speakers from '../components/pages/home/Speakers'
import Partners from '../components/pages/home/Partner'
import Standing from '../components/pages/home/Standing'
import WhyUs from '../components/pages/home/WhyUs'
import BasePage from '../components/shared/BasePage'

export const Home: NextPage = () => {
  return (
    <BasePage>
      <Banner />
      <Description />
      <Standing />
      <Speakers />
      <Schedule />
      <WhyUs />
      <Partners />
      {/* <PictureSeparator pictures={p1} /> */}
    </BasePage>
  )
}

export default Home
