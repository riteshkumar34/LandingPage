import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import FeaturesDetail from './components/FeaturesDetail'
import Communicate from './components/Communicate'
import Understand from './components/Understand'
import Reframe from './components/Reframe'
import QyuroCity from './components/QyuroCity'
import InnerSigns from './components/InnerSigns'
import FAQs from './components/FAQs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturesDetail />
        <Communicate />
        <Understand />
        <Reframe />
        <QyuroCity />
        <InnerSigns />
        <FAQs />
      </main>
      <Footer />
    </>
  )
}

export default App
