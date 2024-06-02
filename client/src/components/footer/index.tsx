export default function Footer() {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
     <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 md:mx-20 mx-6">

        <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center">
                <img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" alt="logo"  />
                {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">Company Name</span> */}
            </a>
            <div className="mt-6 lg:max-w-xl">
                <p className="text-sm text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis mi, faucibus dignissim lorem
                    id, imperdiet interdum mauris. Vestibulum ultrices sed libero non porta. Vivamus malesuada urna eu
                    nibh malesuada, non finibus massa laoreet. Nunc nisi velit, feugiat a semper quis, pulvinar id
                    libero. Vivamus mi diam, consectetur non orci ut, tincidunt pretium justo. In vehicula porta
                    molestie. Suspendisse potenti. 
                    </p>
            </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">Popular Courses</p>
            <a href="#">UPSC - Union Public Service Commission</a>
            <a href="#">General Knowledge</a>
            <a href="#">MBA</a>
            <p className="text-base font-bold tracking-wide text-gray-900">Popular Topics</p>
            <a href="#">Human Resource Management</a>
            <a href="#">Operations Management</a>
            <a href="#">Marketing Management</a>
        </div>

        <div>
            <p className="text-base font-bold tracking-wide text-gray-900">COMPANY IS ALSO AVAILABLE ON</p>
            <div className="flex items-center gap-1 px-2">
                <a href="#" className="w-full min-w-xl">
                    <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button" className="h-10" />
                </a>
                <a className="w-full min-w-xl" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
                    <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button" className="h-28" />
                </a>
            </div>
            <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a href="#" title="send email">admin@company.com</a>
            </div>
        </div>

    </div>

    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row md:mx-0 mx-6 ">
        <p className="text-sm text-gray-600">© Copyright 2023 Company. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a href="#"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                    &amp; Cookies Policy
                </a>
            </li>
            <li>
                <a href="#"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                </a>
            </li>
        </ul>
    </div>
   </footer>
  );
  
}




    // <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 bottom-0 w-full 	">
    //   <div className="max-w-full px-4 py-16 mx-4 sm:px-6 lg:px-8">
    //     <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
    //       <div className="flex flex-col items-start lg:w-1/3">
    //         <img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" className="mr-5 h-6 sm:h-9" alt="logo" />
    //         <p className="max-w-xs mt-4 text-sm text-gray-600">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
    //         </p>
    //       </div>
    //       <div className="flex flex-wrap justify-between lg:w-2/3 gap-8">
    //         <div className="flex flex-col">
    //           <p className="font-medium text-gray-900">Company</p>
    //           <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
    //             <a className="hover:opacity-75" href="#"> About </a>
    //             <a className="hover:opacity-75" href="#"> Meet the Team </a>
    //             <a className="hover:opacity-75" href="#"> History </a>
    //             <a className="hover:opacity-75" href="#"> Careers </a>
    //           </nav>
    //         </div>
    //         <div className="flex flex-col">
    //           <p className="font-medium text-gray-900">Services</p>
    //           <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
    //             <a className="hover:opacity-75" href="#"> 1on1 Coaching </a>
    //             <a className="hover:opacity-75" href="#"> Company Review </a>
    //             <a className="hover:opacity-75" href="#"> Accounts Review </a>
    //             <a className="hover:opacity-75" href="#"> HR Consulting </a>
    //             <a className="hover:opacity-75" href="#"> SEO Optimisation </a>
    //           </nav>
    //         </div>
    //         <div className="flex flex-col">
    //           <p className="font-medium text-gray-900">Helpful Links</p>
    //           <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
    //             <a className="hover:opacity-75" href="#"> Contact </a>
    //             <a className="hover:opacity-75" href="#"> FAQs </a>
    //             <a className="hover:opacity-75" href="#"> Live Chat </a>
    //           </nav>
    //         </div>
    //         <div className="flex flex-col">
    //           <p className="font-medium text-gray-900">Legal</p>
    //           <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
    //             <a className="hover:opacity-75" href="#"> Privacy Policy </a>
    //             <a className="hover:opacity-75" href="#"> Terms & Conditions </a>
    //             <a className="hover:opacity-75" href="#"> Returns Policy </a>
    //             <a className="hover:opacity-75" href="#"> Accessibility </a>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-col mt-8">
    //       <p className="text-xs text-gray-800">© 2024. Company Name. All rights reserved.</p>
    //       <div className="space-x-6 space-y-4 flex flex-row  ">
    
    //         <button type="button"
    //           className="w-7 h-7 mt-4 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
    //          <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
    //             <path
    //               d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
    //               data-original="#010002" />
    //           </svg>
    //         </button>
    //         <button type="button"
    //           className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
    //             <path
    //               d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
    //               data-original="#03a9f4" />
    //           </svg>
    //         </button>
      
    //         <button type="button"
    //           className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
    //             <path
    //               d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
    //               data-original="#0077b5" />
    //           </svg>
    //         </button>
      
    //         <button type="button"
    //           className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#ea0065] hover:bg-[#ea0065d6] active:bg-[#ea0065]">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
    //             <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0"
    //               data-original="#000000" />
    //             <path
    //               d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0"
    //               data-original="#000000" />
    //             <path
    //               d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"
    //               data-original="#000000" />
    //           </svg>
    //         </button>
      
    //         <button type="button"
    //           className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#f61c0d] hover:bg-[#f61d0de9] active:bg-[#f61c0d]">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 461.001 461.001">
    //             <path
    //               d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"
    //               data-original="#f61c0d" />
    //           </svg>
    //         </button>
    //         <button type="button"
    //           className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#4caf50] hover:bg-[#4caf10] active:bg-[#4caf50]">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
    //             <path fill="#fff"
    //               d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0z"
    //               data-original="#4caf50" />
    //             <path fill="#4caf50"
    //               d="M405.024 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"
    //               data-original="#fafafa" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </footer>