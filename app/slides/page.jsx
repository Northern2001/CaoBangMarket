'use client'

import Image from 'next/image'

import {Swiper, SwiperSlide} from 'swiper/react'

import {images} from '@/lib/images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Page() {

    const openInNewTab = () => {
        const newWindow = window.open("https://www.facebook.com/profile.php?id=100094139593961", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <section className='py-12'>
            <div className='container'>
                <Swiper
                    spaceBetween={10}
                    className=' w-full rounded-lg'
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='h-full w-full items-center justify-center'>
                                <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <Image className="p-8 rounded-t-lg h-full" src={image.src} alt="product image"/>
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{image.alt}</h5>
                                        </a>
                                        <div className="flex items-center justify-between">
                                            <span className=" font-bold text-gray-900 dark:text-white">{image.price}</span>
                                            <a onClick={() => {
                                                openInNewTab()
                                            }} href="#"
                                               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăt
                                                hàng</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}
