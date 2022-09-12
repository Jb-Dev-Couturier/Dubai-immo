import React from 'react'
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({children}) => (
  <>
    <Head>
      <title>ImmoRicain Agence Mondial</title>
      <meta
        name="description"
        content="Agence mondial spécialisé dans la location ou l'achat de propriété au UAE"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box maxWidth='1280px' m='auto'>
      <header>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </Box>
  </>
);

export default Layout