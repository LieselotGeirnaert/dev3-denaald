import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div>
        <Link href={`/`}>
          <a>Home</a>
        </Link>
      </div>

      <div>
        {children}
      </div>

      <footer>
        <p>Dit is de footer</p>
      </footer>
    </>
  )
}

export default Layout;