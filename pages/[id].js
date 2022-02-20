import { ArrowLeftIcon } from "@heroicons/react/outline"
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore"
import { getProviders, getSession, useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
import Comment from "../components/Comment"
import Login from "../components/Login"
import Modal from "../components/Modal"
import Post from "../components/Post"
import Sidebar from "../components/Sidebar"
import { db } from "../firebase"

function PostPage ({providers, trendingResults, followResults}){

    const [isOpen, setIsOpen] = useRecoilState(modalState)
    const router =useRouter()
    const { data: session } = useSession()
    const { id } = router.query
    const [post, setPost] = useState()
    const [comments, setComments] = useState([])

    useEffect(()=>{
        onSnapshot(doc(db, "posts", id), (snapshot) => {
            setPost(snapshot.data())
        })
    },[db])

    useEffect(()=> onSnapshot(query(collection(db,"posts",id,"comments"), orderBy("timestamp", "desc")), 
    (snapshot)=>
    setComments(snapshot.docs)
), [db, id])

    if(!session) return <Login providers={providers}/>
 

    return(
    <div className=''>
        <Head>
          <title>{post?.username} on the dashboard: "{post?.message}"</title>
          <meta name="description" content="Developers can publish their projects"/>
          <link rel="icon" href="https://th.bing.com/th/id/R.6f6f59ca9a56444cfff8d89aaa09d100?rik=pAkm1nprRZgYVA&pid=ImgRaw&r=0" />
        </Head>
  
        <main className='flex bg-black min-h-screen max-w-[1500px] mx-auto'>
          <Sidebar />
          <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0">
                     <ArrowLeftIcon className="h-5 text-white" onClick={() => router.push("/")}/>
                </div>
                Dashboard
            </div>
            <Post id={id} post={post} postPage />
            { comments.length > 0 && (
                <div className="pb-72">
                    {comments.map((comment) =>(
                        <Comment key={comment.id}
                        id={comment.id}
                        comment={comment.data()}/>
                    ))}
                </div>
                
            ) }    
          </div>
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
  