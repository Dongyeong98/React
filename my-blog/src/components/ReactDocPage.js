import React,{ useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";



export default function ReactDocPage() {
    // docID 1, 2, 3, ....

    const [docs, setDocs] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDate() {
          const res =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
          const result =  await res.json()
          setDocs(result);
        }
        fetchDate();
      },[])
    
    return (
        <>
            <h5 onClick={() => navigate("/")}>logo</h5>
            <div>ReactDocPage ## {params.docId}</div>
        </>
    )
}