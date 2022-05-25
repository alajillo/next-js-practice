import LayOut from "../../components/layout";
import { getAllPostIds, getPostData } from "../../libs/posts";

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback : false
    }
}


export async function getStaticProps({params}){
    const postData = getPostData(params.id);
    return {
        props : {
            postData,
        }
    }
}
export default function Post({postData}){
    
    return (
        <LayOut>
            {postData.title}
            <br/>
            {postData.id}
            <br/>
            {postData.date}
            <br/>
        </LayOut>
    )
}