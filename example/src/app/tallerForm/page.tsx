export default function Home() {
  return (
    <div className="flex items-center justify-center bg-stone-200 w-screen h-screen">
      <main className="flex items-center justify-between bg-white rounded-2xl h-90 w-150 shadow-lg overflow-hidden">
        
        <section className="bg-stone-200 h-85 w-60 rounded-2xl ml-2 relative">
          
          <img src="/data_analyst.webp" className="absolute  -right-10 h-80 w-200  " />
        </section>

        <section className="h-90 w-60 flex flex-col mr-10 pt-20">
          <h1 className="text-black text-4xl font-bold">Sign in</h1>
          <p className="text-gray-500 text-[10px]">Sign in with Open your account</p>

          <div className="flex flex-col-2 gap-2 mb-2 ">
            <button className="bg-gray-100 border border-gray-300 rounded-lg mt-4 px-8 flex items-center">
              <img src="/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png" className="h-4 w-4" />
              <span className="ml-1 text-black text-[10px]">Google</span>
            </button>
            <button className="bg-gray-100 border border-gray-300 rounded-lg mt-4 px-6 flex items-center">
              <img src="/png-transparent-apple-logo-apple-logo-heart-logo-computer-wallpaper.png " className="h-6 w-10" />
              <span className="ml-1 text-black text-[10px]">Apple ID</span>
            </button>
          </div>

          <p className="text-gray-500 text-[10px] mb-4">Or continue with email address</p>

          <div className="flex flex-col gap-3 mb-4 mr-10">
            <div className="bg-gray-100 border border-gray-300 rounded justify-center">
              <p className="text-gray-700 text-xs"> 📧 tam@ui8.net</p>
            </div>
            <div className="bg-gray-100 border border-gray-300 rounded justify-center">
              <p className="text-gray-700 text-xs">🔐 ******************</p>
            </div>
          </div>

          <form className="flex flex-col gap-4 mr-10">
            <button className="bg-blue-700 text-white rounded-3xl py-1 px-4 font-bold text-sm">
              Start trading
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

