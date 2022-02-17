import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { getProviders, getSession, useSession } from "next-auth/react"

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>The Dashboard</title>
        <meta name="description" content="Developers can publish their projects"/>
        <link rel="icon" href="https://th.bing.com/th/id/R.6f6f59ca9a56444cfff8d89aaa09d100?rik=pAkm1nprRZgYVA&pid=ImgRaw&r=0" />
      </Head>

      <main className='flex bg-black min-h-screen max-w-[1500px] mx-auto'>
        <Sidebar />
        <Feed />
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  )

  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  )

  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session
    }
  }

}
