import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/logo.png'
import Image from '../ui/Image'
import Anchor from '../ui/Anchor'
import { menuData } from '../../dummyData/menuData'

const Navbar = () => {
  return (
    <nav className="bg-brand-dark py-3">
        <Container>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-32">
                    <Anchor href="/" className="relative after:absolute after:content-[''] after:w-0.5 after:bg-white/10 after:h-30 after:-right-16 after:-bottom-7">
                        <Image src={logo} alt="Finsweet Logo" />
                    </Anchor>
                    <ul className="flex items-center gap-12">
                        {menuData.map((item, index) =>(
                            <li key={index}>
                                <Anchor href={item.url} className="font-normal text-base uppercase text-white font-roboto hover:text-brand-peach transition-colors">
                                    {item.label}
                                </Anchor>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button className="bg-brand-peach text-[#1C1D28] font-roboto uppercase font-normal text-base px-12 py-5 rounded-xl hover:opacity-90 transition-opacity">
                        CONTACT US
                    </button>
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar