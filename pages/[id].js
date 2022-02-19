import { doc, onSnapshot } from "firebase/firestore"
import { getProviders, getSession, useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
import Login from "../components/Login"
import Modal from "../components/Modal"
import Sidebar from "../components/Sidebar"
import { db } from "../firebase"

function PostPage ({providers, trendingResults, followResults}){

    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const router =useRouter()
    const { data: session } = useSession()
    const { id } = router.query
    const [post, setPost] = useState()

    useEffect(()=>{
        onSnapshot(doc(db, "posts", id), (snapshot) => {
            setPost(snapshot.data())
        })
    },[])

    if(!session) return <Login providers={providers}/>

    return(
    <div className=''>
        <Head>
          <title>The Dashboard</title>
          <meta name="description" content="Developers can publish their projects"/>
          <link rel="icon" href="https://th.bing.com/th/id/R.6f6f59ca9a56444cfff8d89aaa09d100?rik=pAkm1nprRZgYVA&pid=ImgRaw&r=0" />
        </Head>
  
        <main className='flex bg-black min-h-screen max-w-[1500px] mx-auto'>
          <Sidebar />
            {isOpen && <Modal />} 
        </main>
      </div>
    )
}

export default PostPage

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
  