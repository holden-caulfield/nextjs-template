import Head from "next/head"

const Layout = ({ children }) => (
  <>
    <Head>
      <title>NextJS Basic Template</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
)

export default Layout
