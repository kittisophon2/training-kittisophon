/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/layout';
import { useParams } from 'react-router-dom';

const Contact = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 ">ติดต่อ</h1>
      <hr className="my-10" />
      <h2 className="font-bold">NVC Training Center</h2>
      <p><span className="font-semibold">
       Address:</span> 90 Tesa Rd,Mueang, Nakhon Pathom, 73000
      </p>
      <p><span className="font-semibold">Tel:</span> 032-252790</p>
      <p><span className="font-semibold">E-mail:</span> admin@nvctrainingcenter.com</p>
    </Layout>
  )
}

export default Contact