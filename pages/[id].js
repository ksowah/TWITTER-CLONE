import { useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
import Modal from "../components/Modal"
import Sidebar from "../components/Sidebar"

function PostPage (){

    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const router =useRouter()
    const { data: session } = useSession()
    const { id } = router.query

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