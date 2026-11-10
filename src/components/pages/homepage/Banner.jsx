import React from 'react'
import Container from '../../common/Container'
import Anchor from '../../ui/Anchor'
import bannerImg from '../../../assets/banner.png' // Adjust the image path based on your assets folder structure

const Banner = () => {
  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat py-32 xl:py-40 text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative z-10">
        <div className="max-w-2xl flex flex-col items-start gap-6">
          <p className="font-roboto text-xs xl:text-sm uppercase tracking-widest text-white/80">
            Welcome to our church
          </p>
          <h1 className="font-roboto text-4xl sm:text-5xl xl:text-6xl font-bold uppercase tracking-wide leading-tight">
            Become a part of our community
          </h1>
          <div className="pt-2">
            <Anchor 
              href="/about" 
              className="inline-block bg-brand-peach text-[#1C1D28] font-roboto font-medium text-base uppercase px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Learn More
            </Anchor>
          </div>
          <div className="pt-6 flex items-center gap-3 text-white/70 font-roboto text-xs xl:text-sm">
            <span className="w-6 h-[1px] bg-white/70"></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner