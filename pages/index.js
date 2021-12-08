import React from 'react';
import Head from 'next/head'
import Layout from '../src/layout';
import Nav from '../src/components/shared/nav/nav';
import Encabezado from '../src/components/index/encabezado';
import Financiamiento from '../src/components/index/financiamiento';
import Proyecto from '../src/components/index/proyecto';
import Ambito from '../src/components/index/ambitoEstudio';
import Organizaciones from '../src/components/index/organizaciones';
import Footer from '../src/components/shared/footer/footer';
import Instituciones from '../src/components/index/instituciones';
import Produccion from '../src/components/index/produccion';

export default function Home () {

  return (
    <Layout>
      <Head>
        <title>Permafrost - INAIGEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/inaigem.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <main>
        <Nav />
        <Encabezado />
        <Financiamiento />
        <Proyecto />   
        <Instituciones />   
        <Ambito />
        <Produccion />
        <Organizaciones />
        <Footer />
      </main>
    </Layout>
  )
}