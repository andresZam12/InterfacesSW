export default function Home() {
  return (
    <main className="flex items-center justify-center bg-gray-300 w-screen h-screen">
      <section className="bg-white rounded-xl shadow-lg p-6 w-80">

        <header className="flex justify-between text-gray-500">
          <h1>Tue Feb 18 2025</h1>
          <h1>9:31:25 p.m.</h1>
        </header>

        <h2 className="text-blue-950 text-2xl font-bold">List Tailwind</h2>

        <section className="flex justify-between text-gray-400 text-xs mt-7 mb-1">
          <span>S</span><span>M</span><span>T</span><span>W</span>
          <span>T</span><span>F</span><span>S</span>
        </section>

        <section className="flex justify-between text-black text-xs mb-4">
          <span>24</span><span>25</span><span>26</span><span>27</span>
          <span>28</span><span>29</span><span>30</span>
        </section>

        <ul className="space-y-4 list-none">
          
          <li className="flex justify-between items-center bg-gray-300 rounded-md p-2 text-black">
            <span className="flex items-center gap-2 text-green-600">
              ☑ <span className="text-gray-500 line-through">take out the trash</span>
            </span>
            <time className="text-sm text-gray-500">9:00 AM</time>
          </li>

        
          <li className="flex justify-between items-center bg-gray-300 rounded-md p-2">
            <span className="flex items-center gap-2 text-green-600">
              ☑ <span className="text-gray-500 line-through">do homework</span>
            </span>
            <time className="text-sm text-gray-500">12:00 PM</time>
          </li>


          <li className="flex justify-between items-center bg-gray-300 rounded-md p-2">
            <span className="flex items-center gap-2 text-gray-500">
              ◻ <span>go to grocery store</span>
            </span>
            <time className="text-sm text-gray-500">1:00 PM</time>
          </li>

          <li className="flex justify-between items-center bg-gray-300 rounded-md p-2">
            <span className="flex items-center gap-2 text-gray-500">
              ◻ <span>run 5 kilometers</span>
            </span>
            <time className="text-sm text-gray-500">4:20 PM</time>
          </li>

          <li className="flex justify-between items-center bg-gray-300 rounded-md p-2">
            <span className="flex items-center gap-2 text-gray-500">
              ◻ <span>load the dishwasher</span>
            </span>
            <time className="text-sm text-gray-500">9:00 PM</time>
          </li>

          <li className="flex justify-between items-center bg-gray-300 rounded-md p-2">
            <span className="flex items-center gap-2 text-gray-500">
              ◻ <span>take out the trash</span>
            </span>
            <time className="text-sm text-gray-500">9:00 AM</time>
          </li>
        </ul>
      </section>
    </main>
  );
}
