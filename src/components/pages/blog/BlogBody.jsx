import React from 'react'
import Container from '../../common/Container'
import { Link } from 'react-router-dom';
import { blogData } from '../../../dummyData/blogData';

const BlogBody = () => {
  return (
    <section className="py-30">
        <Container>
            <div className="grid grid-cols-3 gap-6">
                {blogData.map((item, index) => (
                    <Link to={`/blog/${item.slug}`} className='bg-brand-peach shadow-2xl p-4 rounded-xl'>
                        <div className='h-[250px] rounded-2xl bg-amber-300'></div>
                        <h3 className='text-xl mt-5'>{item.title}</h3>
                        <p className='text-brand-dark py-4'>{item.description}</p>
                        <span className='text-sm text-gray-500'>Published: {item.published}</span>
                    </Link>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default BlogBody