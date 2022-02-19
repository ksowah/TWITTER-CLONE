function PostPage (){
    return(
    <div className=''>
        <Head>
          <title>The Dashboard</title>
          <meta name="description" content="Developers can publish their projects"/>
          <link rel="icon" href="https://th.bing.com/th/id/R.6f6f59ca9a56444cfff8d89aaa09d100?rik=pAkm1nprRZgYVA&pid=ImgRaw&r=0" />
        </Head>
  
        <main className='flex bg-black min-h-screen max-w-[1500px] mx-auto'>
          <Sidebar />
          <Feed />
          {/* Widget */}
            {isOpen && <Modal />} 
        </main>
      </div>
    )
}

export default PostPage