import { Button, Image } from '@nextui-org/react'
import { USER_INFO } from '../constants'
import WrapperSection from './WrapperSection'

const InfomartionSection = () => {
    return (
        <WrapperSection id='profile'>
            <div id='is-info' className='flex-1 space-y-6'>
                <div id='is-box-info' className='font-bold text-xl'>
                    <h1>Hi,</h1>
                    <h1>{`I'm`} <span className='text-orange-500'>Tuan Anh</span></h1>
                    <h1>An Front-end developer.</h1>
                </div>
                <div id='is-box-descriptions'>
                    {USER_INFO.map((info) => (
                        <p key={info.name}>{info.name}: {info.value}</p>
                    ))}
                </div>
                <div id='is-actions' className='space-x-4'>
                    <Button>Follow me</Button>
                    <Button>Contact</Button>
                </div>
            </div>
            <div id='is-avatar' className='flex-1 flex justify-center items-center'>
                <Image
                    isZoomed
                    width={240}
                    alt="NextUI Fruit Image with Zoom"
                    src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                />
            </div>
        </WrapperSection>
    )
}

export default InfomartionSection