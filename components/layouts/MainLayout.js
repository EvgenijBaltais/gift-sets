import Header from '../Header'
import Footer from '../Footer'

import { useRouter } from 'next/router'

export default function MainLayout({ children }) {


const router = useRouter()
const { query } = useRouter()


  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}