import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <Head>
      <title>首页</title>
      <meta author="xumeng"/>
    </Head>
    <p>hello nextjs</p>
    <Link href='/about?a=1&b=2&c=3'>about page</Link>
    <img src='/1.png' alt='nima'/>
    <style jsx>{`
      img{
        width: 200px;
      }
    `}</style>
  </Layout>
);

export default Index;