'use client'

import {useState} from 'react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import Link from "next/link";

export default function Page() {

    return (
        <section className='w-full bg-black py-12 justify-center'>
            <div style={{textAlign: "center"}}>
                <div>
                    Tiệm đặc sản sạch Cao Bằng 11 <br/>
                    Địa chỉ: Định Công, Hanoi, Vietnam <br/>
                    Số điện thoại: 094 177 13 65 <br/>
                    <Link href={`https://www.facebook.com/profile.php?id=100094139593961`}> Facebook: Tiệm đặc sản sạch Cao Bằng 11</Link>
                </div>
            </div>

        </section>
    )
}
