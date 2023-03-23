import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import Layout from "../../components/layout"
import { getSortedPostsData } from '../../lib/post.jsx';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

const FirstPost = ({ allPostsData }) => {
    return (

        <Layout>
            <Head>
                <title>
                    first post
                </title>
            </Head>
            {/* <Script
    src="https://connect.facebook.net/en_US/sdk.js"
    strategy="lazyOnload"
    onLoad={() =>
      console.log(`script loaded correctly, window.FB has been populated`)
    }
    /> */}
            <section>
                <h1>First Page</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quaerat incidunt sint, est facere velit voluptate odit non! Quod animi, odio dolorum dignissimos saepe doloribus ratione alias non maiores totam.
                </p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export default FirstPost