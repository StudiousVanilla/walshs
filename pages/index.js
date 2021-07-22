import Head from 'next/head'
import CoffeeInfo from '../components/index/CoffeeInfo'
import IntroInfo from '../components/index/IntroInfo'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-pubBg">
      <Head>
        <title>Walsh's Pub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroInfo/>
      <CoffeeInfo/>
      <IntroInfo/>
    </div>
  )
}
