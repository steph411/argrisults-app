import Head from 'next/head'
import { Header, Hero, MainContent,NewsletterSub, Footer }  from '../components'


export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <MainContent />
      <NewsletterSub/>
      <Footer/>
    </>
  )

  

}
