import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from "next/script";
import Layout from '../../components/layout';

export default function FirstPost(){
    return (

            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>First Post</h1>
                <Image
                    src="/images/test.jpeg"
                    height={144}
                    width={144}
                    alt="Your Name"
                />
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Layout>

    )
}
