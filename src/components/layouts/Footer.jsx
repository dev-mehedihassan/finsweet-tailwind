import React from 'react'
import Container from '../common/Container'
import footerLogo from '../../assets/footerLogo.png'
import Image from '../ui/Image'
import Anchor from '../ui/Anchor'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <Container>
        <div className="flex items-start justify-between gap-12">
          
          <div className="flex flex-col gap-6">
            <Anchor href="/">
              <Image src={footerLogo} alt="Finsweet Logo" />
            </Anchor>
            <p className="font-roboto text-xs uppercase text-white/60 tracking-wider">
              © COPYRIGHT FINSWEET 2022 
            </p>
            <div className="flex flex-col gap-2 font-roboto text-xs uppercase text-white/80">
              <p>(480) 555-0103</p> 
              <p>4517 WASHINGTON AVE.</p> 
              <p>FINSWEET@EXAMPLE.COM</p> 
            </div>
          </div>

          <div>
            <h4 className="font-roboto text-base font-medium mb-6">Quicklinks</h4> 
            <ul className="flex flex-col gap-4 font-roboto text-xs uppercase text-white/70">
              <li>
                <Anchor href="/about-us" className="hover:text-brand-peach transition-colors">
                  ABOUT US 
                </Anchor>
              </li>
              <li>
                <Anchor href="/sermons" className="hover:text-brand-peach transition-colors">
                  SERMONS 
                </Anchor>
              </li>
              <li>
                <Anchor href="/events" className="hover:text-brand-peach transition-colors">
                  EVENTS 
                </Anchor>
              </li>
              <li>
                <Anchor href="/blog" className="hover:text-brand-peach transition-colors">
                  BLOG 
                </Anchor>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-roboto text-base font-medium mb-6">Connect</h4> 
            <div className="flex items-center gap-4 text-brand-peach text-lg">
              <Anchor href="#" className="hover:opacity-80 transition-opacity">
                <FaFacebookF /> 
              </Anchor>
              <Anchor href="#" className="hover:opacity-80 transition-opacity">
                <FaTwitter /> 
              </Anchor>
              <Anchor href="#" className="hover:opacity-80 transition-opacity">
                <FaLinkedinIn /> 
              </Anchor>
            </div>
          </div>

          <div className="max-w-md">
            <h3 className="font-roboto text-2xl xl:text-3xl font-bold uppercase tracking-wide leading-tight mb-8">
              SUBSCRIBE TO GET LATEST UPDATES AND NEWS 
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center border border-white/20 rounded-xl overflow-hidden bg-[#1C1D28]">
              <input 
                type="email" 
                placeholder="Yourmail@gmail.com" 
                className="w-full bg-transparent px-6 py-4 font-roboto text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-brand-peach text-[#1C1D28] font-roboto font-medium text-sm uppercase px-8 py-4 whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer