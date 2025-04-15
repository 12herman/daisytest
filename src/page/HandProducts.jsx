import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function HandProducts() {
  return (
   <Layout>
     <div>
        Hand

        <Link to={'/handproduct/name'}> Hello</Link>
        
        </div>
   </Layout>
  )
}
