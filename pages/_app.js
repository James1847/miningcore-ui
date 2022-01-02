// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Popover, Transition } from '@headlessui/react'
function MyApp ({ Component, pageProps }) {
  return (
    <>
      <div className="px-80 mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              home
            </a>
            <a href="/test" className="text-base font-medium text-gray-500 hover:text-gray-900">
              test
            </a>
          </Popover.Group>
        </div>
      </div>
      <div className='px-80 mx-auto sm:px-6 mt-8'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp