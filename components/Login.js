import Head from "next/head"
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({providers}) => {
  return (
      <>
        <Head>
            <title>Login</title>
        </Head>

        <div className='h-screen flex flex-col items-center justify-center'>
            <Image 
                src="https://th.bing.com/th/id/R.902fa6464d5e8e7ed27f3ca4d37398a9?rik=NqVYfao0nm3ZYQ&pid=ImgRaw&r=0"
                width={150}
                height={150}
            />
            {Object.values(providers).map((provider) => (
                <>
              <button key={provider.name} 
                    onClick={()=>signIn(provider.id, { callbackUrl: '/' })} 
                    className='cursor-pointer relative mt-12 inline-flex items-center justify-start px-6 p-2 overflow-hidden font-medium transition-all bg-black hover:bg-white group border'>
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black group-hover:font-bold flex items-center">Sign in With Google <FcGoogle className="ml-2 text-xl"/></span>
                   
                </button>
                
                </>
            
            ))}
    </div>
      </>
      
  )
}

export default Login
