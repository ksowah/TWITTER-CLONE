import Head from "next/head"
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
      <>
        <Head>
            <title>Login</title>
        </Head>

        <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
       
        <div className="flex flex-col shadow-xl bg-white h-64 w-72 p-4 items-center justify-center">
            <div  
                className='flex p-2 px-6 bg-sky-400 hover:bg-sky-500  text-white text-center mt-8 cursor-pointer'>
                <h1 className="flex items-center justify-between font-medium">
                    Login with Google <FcGoogle className="ml-2 text-xl"/>
                </h1>
            </div>
            <div  
                className='flex p-2 px-6 bg-black text-white text-center mt-8 cursor-pointer'>
                <h1 className="flex items-center justify-between font-medium">
                    Login with Github <AiFillGithub className="ml-2 text-xl"/>
                </h1>
            </div>
        </div>
    </div>
      </>
      
  )
}

export default Login