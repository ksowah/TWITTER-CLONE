import Head from "next/head"
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Login = ({providers}) => {
  return (
      <>
        <Head>
            <title>Login</title>
        </Head>

        <div className='h-screen flex flex-col items-center justify-center'>
        <div className="flex flex-col border border-gray-300 h-64 w-72 p-4 items-center justify-center">
            {Object.values(providers).map((provider) => (
                <>
              <div  
                    className='flex p-2 px-6 bg-sky-500 hover:bg-sky-600  text-white text-center mt-8 cursor-pointer'>
                    <h1 className="flex items-center justify-between font-medium">
                        Login with Google <FcGoogle className="ml-2 text-xl"/>
                    </h1>
                </div>
                
                <button key={provider.name} 
                    onClick={()=>signIn(provider.id, { callbackUrl: '/' })}
                    class="cursor-pointer relative mt-8 inline-flex items-center justify-start px-6 p-2 overflow-hidden font-medium transition-all bg-black hover:bg-white group border">
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black flex items-center">Login With Github <AiFillGithub className="ml-2 text-xl"/></span>
                </button>
                </>
            
            ))}
        </div>
    </div>
      </>
      
  )
}

export default Login