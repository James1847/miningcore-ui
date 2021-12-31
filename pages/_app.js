// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Popover, Transition } from '@headlessui/react'

function MyApp({ Component, pageProps }) {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
      <div className='mx-auto max-w-7xl sm:px-6'>
        <Component {...pageProps} />
      </div>
    </Popover>
  )
}

export default MyApp