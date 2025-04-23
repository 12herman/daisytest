import React from 'react'
import Layout from '../components/Layout'
import { myInfo } from '../staticData'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className='bg-base-200 py-10 mt-10 md:py-0 md:mt-0'>
   <Layout>
     <div className='grid md:grid-cols-2 w-full sm:h-screen md:content-center gap-y-5'>
        <span className='flex flex-col gap-y-3 md:order-none order-2'>
        <h2 className='font-medium text-2xl md:text-5xl '> <span className='text-primary '>Contact</span> Us</h2>
        <p className='opacity-70 md:mt-5 text-sm  md:text-base'>Email. can, or complete the form to learn how <br/>
        Snappy can solve your messaging problem.<br/>
        </p>
        <a className='block opacity-70 text-sm  md:text-base'  href={`mailto:${myInfo.email}?subject=Hello%20Herman`}>{myInfo.email}</a>
        <a className='block opacity-70 text-sm  md:text-base'  href={`tel:${myInfo.mobileno}`}>{myInfo.mobileno}</a>
        <span className='block underline text-sm  md:text-base'>customer supports</span>

        <div className='grid xl:grid-cols-2 mt-2 md:mt-5 gap-3'>
          <span>
            <h2 className='font-medium'>Custorner Support</h2>
            <p className='opacity-65 mt-2 text-sm  md:text-base'>Our support team is available
            uourxi the clock to address any
            concerns or you may
            Feedback and Suggestions
            
            </p>
          </span>

          <span>
            <h2 className='font-medium'>Feedback and Suggestions</h2>
            <p className='opacity-65 mt-2 text-sm  md:text-base'>Our support team is available
            uourxi the clock to address any
            concerns or you may
            Feedback and Suggestions
            </p>
          </span>
        </div>
        </span>

        <span><ContactForm/></span>
     </div>
  </Layout>
  </div>
  )
}
