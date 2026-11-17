import React, { useEffect, useState } from 'react'
import Container from '../../components/common/Container'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AboutIndex = () => {

const url = 'https://jsonplaceholder.typicode.com/posts'

const [post, setPost] = useState([]);

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get(url);
        setPost(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
}, []);

  return (
    <div className='py-20'>
        <Container>
            <div className='grid grid-cols-3 gap-6'>
                {post.length > 0 ? post.map((item, index) => (
                    <div key={index} className='bg-brand-peach p-10'>
                        <span>{item.id || <Skeleton />}</span>
                        <h3 className='text-xl font-bold'>{item.title || <Skeleton />}</h3>
                        <p className='mt-5'>{item.body || <Skeleton />}</p>
                    </div>
                ))
                : 
                [0,1,2,3,4,5,6,7,8].map((item, index) => (
                    <div key={index} className='bg-brand-peach p-10'>
                        <span><Skeleton /></span>
                        <h3 className='text-xl font-bold'><Skeleton /></h3>
                        <p className='mt-5'><Skeleton /></p>
                </div>
                ))
                }
            </div>
        </Container>
    </div>
  )
}

export default AboutIndex