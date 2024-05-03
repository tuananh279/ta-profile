import React from 'react'
import WrapperSection from './WrapperSection'
import { Image } from '@nextui-org/react'

const ExperienceSection = () => {
    return (
        <WrapperSection id='experience' className='bg-white rounded-2xl'>
            <div id='es-avatar' className='flex-1'>
                <Image
                    isZoomed
                    width={240}
                    alt="NextUI Fruit Image with Zoom"
                    src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                />
            </div>
            <div id='es-info' className='flex-2 flex flex-col space-y-6'>
                <div id='es-info-study'>
                    <h1 className='font-bold text-xl'>Học vấn</h1>
                    <p>Trường Đại học Công nghệ - Đại học Quốc gia Hà Nội</p>
                    <p>Thời gian: 10/2017 - 05/2021</p>
                    <p>Chuyên ngành: Công nghệ thông tin</p>
                </div>
                <div id='es-info-work'>
                    <h1 className='font-bold text-xl'>Kinh nghiệm làm việc</h1>
                    <p>Công ty: Tổng công ty giải pháp doanh nghiệp Viettel</p>
                    <p>Vị trí: Kỹ sư phát triển phần mềm</p>
                    <p>Thời gian: 12/2022 - nay</p>
                </div>
            </div>
        </WrapperSection>
    )
}

export default ExperienceSection