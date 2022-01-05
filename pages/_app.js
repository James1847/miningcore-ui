import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import '@/styles/globals.css'
import { Popover, Transition } from '@headlessui/react'
import WithRedux from "@/store/withRedux";
import Link from 'next/link'
import { InitStore } from '@/components/InitStore';
import { Provider } from 'react-redux'
const menuList = [
  { name: 'top miners', path: '/' },
  { name: 'pool performance', path: '/poolPerformance' },
  { name: 'currentBlocks', path: '/currentBlocks' },
  { name: 'payments', path: '/payments' },
  { name: 'statistics', path: '/statistics' },
  { name: 'paymentDetilsList', path: '/paymentDetilsList' },
  // { name: 'performance', path: '/performance' },
]
function MyApp ({ Component, pageProps, ReduxStore, router }) {
  const { pathname } = router
  return (
    <>
      <Provider store={ReduxStore}>
        <InitStore>
          <div className="mx-auto px-4 ">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 ">
              <Popover.Group as="nav" className="space-x-10">
                {
                  menuList.map(item => (
                    <Link href={item.path} key={item.name} className="text-base font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))
                }
              </Popover.Group>
            </div>
          </div>
          <div className=' mx-auto sm:px-6 mt-8'>
            <Component {...pageProps} />
          </div>
        </InitStore>
      </Provider>
    </>
  )
}
MyApp.getInitialProps = async appContext => {
  const store = appContext.ReduxStore
  // store.subscribe(() => {
  //   console.log("store change");
  // });
  return { ReduxStore: store.getState() }
};
export default WithRedux(MyApp)