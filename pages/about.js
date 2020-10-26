import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';
import Layout from '../components/Layout';

const About = withRouter(props => {
  const { a, b, c } = props.router.query
  return (
    <Layout>
      <Head>
        <title>关于我</title>
        <meta author="asd" />
      </Head>
      <p>参数a: {a}</p>
      <p>参数b: {b}</p>
      <p>参数c: {c}</p>
      <Link href="/">back to index</Link>
      <style jsx>{`
        p{
          color:red;
        }
      `}
      </style>
    </Layout>
  )
})

export default About;
// export default function About(){
//   return (
//     <div>
//       <Link href="/">back to index</Link>
//       <p>this is about page</p>
//     </div>
//   )
// }