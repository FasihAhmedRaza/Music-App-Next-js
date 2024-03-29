import React from 'react'
import courseData from "../data/music_courses.json"
import Link from 'next/link'

const FeaturedCourses = () => {
    return (
        <div className='py-12 bg-gray-900 '>
            <div>
                <div className="text-center">
                    <h2
                        className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                        FEATURED COURSES
                    </h2>
                    <p className='mt-2 text-3xl tracking-tight leading-8
                    font-extrabold text-white sm:text-4xl'>Learn With the Best</p>
                </div>
            </div>

            <div>1</div>
            <div>2</div>
            <div className='mt-20 text-center'>
                <Link href={'/courses'}
                className='px-4 py-2 rounded border border-neutral-600 
                text-neutral-700 bg-white  hover:bg-gray-100 transition duration-200'
                >
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses