import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout';

export default function HandProductsDetails() {
    const {name} = useParams();
  return (
   <Layout>
     <div>HandProductsDetails:{name}</div>
   </Layout>
  )
}
