import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-brand-dark px-16 py-6 flex items-center justify-between text-white">
        <Container>
            
        </Container>
      <div className="w-[1280px] mx-auto text-2xl font-bold tracking-tight">
        <span className="text-brand-peach">{'{'}</span>finsweet
      </div>

      <ul className="flex items-center gap-12 text-sm font-medium tracking-wider">
        <li>
          <a href="#" className="hover:text-brand-peach transition-colors">HOME</a>
        </li>
        <li>
          <a href="#" className="hover:text-brand-peach transition-colors">ABOUT US</a>
        </li>
        <li>
          <a href="#" className="hover:text-brand-peach transition-colors">SERMON</a>
        </li>
        <li>
          <a href="#" className="hover:text-brand-peach transition-colors">BLOG</a>
        </li>
      </ul>

      <div>
        <button className="bg-brand-peach text-brand-dark font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
          CONTACT US
        </button>
      </div>
    </nav>
  )
}

export default Navbar