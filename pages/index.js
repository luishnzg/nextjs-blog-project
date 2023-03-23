import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>
          First Next.Js App
        </h1>
        <p> Construyendo mi primer proyecto en Next.js</p>
        <p><Link href={"/post/firstPost"}>First post</Link></p>
      </section>
    </Layout>
  );
}