import { NextApiResponse, NextApiRequest } from "next";
export default function hanlder(req : NextApiRequest,res : NextApiResponse){
    res.status(200).json({text : 'Hello'});
}
