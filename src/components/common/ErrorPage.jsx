import React from 'react'
import Container from './Container'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex items-center justify-center py-16">
      <Container>
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="font-roboto text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-brand-peach/10 text-brand-peach border border-brand-peach/20">
            Oops! Page Not Found
          </span>
          <h1 className="font-roboto text-7xl sm:text-9xl font-bold tracking-tight text-brand-peach">
            404
          </h1>
          <h2 className="font-roboto text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Something went wrong
          </h2>
          <p className="font-roboto text-sm sm:text-base text-white/60 max-w-md">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="pt-4">
            <NavLink 
              to="/" 
              className="inline-block bg-brand-peach text-[#1C1D28] font-roboto font-medium text-base uppercase px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-brand-peach/10"
            >
              Back to Home
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ErrorPage