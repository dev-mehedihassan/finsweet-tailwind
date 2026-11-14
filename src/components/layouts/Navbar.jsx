import React, { useState } from 'react'
import Container from '../common/Container'
import logo from '../../assets/logo.png'
import Image from '../ui/Image'
import Anchor from '../ui/Anchor'
import { menuData } from '../../dummyData/menuData'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = useLocation()

  return (
    <>
        <nav className="bg-brand-dark py-3 md:py-5 lg:py-3">
        <Container>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-32">
                    <Anchor href="/" className="relative after:absolute after:content-[''] after:w-0.5 after:bg-white/10 after:h-30 after:-right-16 after:-bottom-7">
                        <Image src={logo} alt="Finsweet Logo" />
                    </Anchor>
                    <ul className="hidden lg:flex items-center gap-12">
                        {menuData.map((item, index) =>(
                            <li key={index}>
                                <NavLink to={item.url} className={`font-normal text-base uppercase font-roboto hover:text-brand-peach transition-colors ${item.url === pathname.pathname ? 'text-brand-peach' : 'text-white'}`}>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button className="hidden lg:block bg-brand-peach text-[#1C1D28] font-roboto uppercase font-normal text-base px-8 py-3 xl:px-12 xl:py-5 rounded-xl hover:opacity-90 transition-opacity">
                        CONTACT US
                    </button>
                    <FaBars onClick={() => setIsOpen(true)} className="lg:hidden text-white text-2xl cursor-pointer" />
                </div>
            </div>
        </Container>
    </nav>
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed top-0 right-0 bottom-0 left-0 bg-black/60 z-40 lg:hidden"
          />

          <motion.div
            key="sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-[280px] bg-brand-dark z-50 lg:hidden flex flex-col p-6 shadow-2xl"
          >
          <div className="flex items-center justify-between mb-8">
            <span className="text-white font-roboto font-semibold text-lg">Menu</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl hover:text-brand-peach transition-colors"
            >
              <IoClose />
            </button>
          </div>
          <ul className="flex flex-col gap-6 mb-8">
              {menuData.map((item, index) =>(
                  <li key={index}>
                      <Anchor 
                        href={item.url} 
                        onClick={() => setIsOpen(false)}
                        className="font-normal text-base uppercase text-white font-roboto hover:text-brand-peach transition-colors block"
                      >
                          {item.label}
                      </Anchor>
                  </li>
              ))}
          </ul>
          <div className="mt-auto">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand-peach text-[#1C1D28] font-roboto uppercase font-normal text-base py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                  CONTACT US
              </button>
          </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  )
}

export default Navbar