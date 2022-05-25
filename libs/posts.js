import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'posts');

export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/,'');

        const fullPath = path.join(postsDirectory,fileName);
        const fileContents = fs.readFileSync(fullPath,'utf-8');

        const matterResult = matter(fileContents);
        console.log("matterResult : ", matterResult);
        return {
            id,
            ...matterResult.data
        }
    })
    
    return allPostsData.sort(({date : a}, {date : b})=>{
        if(a < b){
            return 1;
        }else if(a > b){
            return -1;
        }else{
            return 0;
        }
    })
}

export function getAllPostIds(){
    const fileNmaes = fs.readdirSync(postsDirectory);
    return fileNmaes.map(fileName => {
        return {
            params : {
                id : fileName.replace(/\.md$/,""),
            }
        }
    })
}

export function getPostData(id){
    const fullPath = path.join(postsDirectory,`${id}.md`);
    const fileContents = fs.readFileSync(fullPath,'utf8');

    const matterResult = matter(fileContents);

    return {
        id,
        ...matterResult.data,
    }
}