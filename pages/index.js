import Head from 'next/head'
import Image from 'next/image'
import walshsCoffee from '../public/walshs-coffee.jpg'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-2 bg-pubBg">
      <Head>
        <title>Walsh's Pub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src={walshsCoffee}/>


    </div>
  )
}
