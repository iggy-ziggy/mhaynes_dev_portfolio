import React from 'react'
import Title from '../../components/Title/Title'
import ContactForm from '../../components/ContactForm/ContactForm'

const ContactPage = () => {
  return (
    <div className='page_container'>
        <Title text='Get In Touch'/>
        <ContactForm />
    </div>
  )
}

export default ContactPage