import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../components/config';

export function useContent  () {
    const [contents,setContents] =useState([]);

    useEffect(()=>{
     axios.get(`${BACKEND_URL}/api/v1/content`,{
        headers:{
                "Authorization":localStorage.getItem("token")
        }
     })
    .then((response)=>{
        setContents(response.data.content)
    })
    },[])
    console.log(contents);
    

  return contents;
  
}


