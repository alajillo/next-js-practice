import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import { useEffect, useState } from 'react';

function testApiRoute(){
    fetch('/api/hello').then(data=> data.json()).then(result=> console.log(result));
}
export default function FirstPost(){
    const [data, setData] = useState(false);
    const onClickButton = () => {
        setData(v=>!v);
    }
    useEffect(()=>{
        testApiRoute();
    },[data])

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
                <br/>
                <button onClick={onClickButton}>
                    {data ? 'data is true' : 'data is false'}
                </button>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Layout>

    )
}
