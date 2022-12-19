import Head from 'next/head'
import Image from 'next/image'
import { PrimeNumber, OddEven } from '../pattern/pattern'
import CheckPrime from '../checker/check'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Numbers Fact</title>
        <link rel="shortcut icon" href="jugg.ico" type="image/x-icon" />
      </Head>
      <Header />
      <main>
        <div className='flex p-5'>
          <div>
            <PrimeNumber />
          </div>
        </div>
      </main>
    </div>
  )
}
