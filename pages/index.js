import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { getProviders, getSession, useSession } from "next-auth/react"
import Login from '../components/Login'
import Modal from '../components/Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Widgets from '../components/Widgets'

export default function Home({providers, trendingResults, followResults}) {


  // recoil state to open the dialogue for the comment section
  const [isOpen, setIsOpen] = useRecoilState(modalState)

  const { data: session } = useSession()

  if(!session) return <Login providers={providers}/>

  return (
    <div className=''>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Developers can publish their projects"/>
        <link rel="icon" href="https://th.bing.com/th/id/R.902fa6464d5e8e7ed27f3ca4d37398a9?rik=NqVYfao0nm3ZYQ&pid=ImgRaw&r=0" />
      </Head>

      <main className='flex bg-black min-h-screen max-w-[1500px] mx-auto'>
        <Sidebar />
        <Feed />
        <Widgets trendingResults={trendingResults} followResults={followResults}/>
          {isOpen && <Modal />} 
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
      providers: providers,
      session,
    }
  }
}
