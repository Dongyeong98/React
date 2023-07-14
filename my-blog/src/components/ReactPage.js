import React, { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import axios from "axios";
import useSWR from 'swr';

export default function ReactPage() {
  const [number, setNumber] = useState(0);
  // api call -> react에 해당하는 글의 목록을 응답 받음.

  
  async function fetcher() {
    const result =  await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );  
      return result.data
  }
  const { data : docs, error } =  useSWR('posts',  fetcher)

  if(error) return <div>failed load</div>
  if(!docs) return <div>loading...</div>
  

  return (
    <div>
        <button onClick={() => setNumber(number +1)}>{number}</button>
        {docs.map((doc) => (
            <Link 
            to={`${doc.id}`} 
            key={doc.id} 
            style={{ display : "block", margin : "1rem 0"}} > 
                {doc.title}
            </Link>
        ))}
       
    </div>
  );
}