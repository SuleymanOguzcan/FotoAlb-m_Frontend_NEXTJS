import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='İletişim' message='Daha fazla iş ve teklif için aşağıdaki formu gönderin.' />
        <Contact />
    </div>
  )
}

export default contact