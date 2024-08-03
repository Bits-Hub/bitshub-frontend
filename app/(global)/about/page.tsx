import TeamCard from '@/components/molecules/cards/teamCard';
import { TeamData } from '@/lib/data/teamData';
import Image from 'next/image';
import React from 'react'

export default function About() {
    const partners = [
        {
            id: 1,
            imageLink: '/images/partner1.png',
            name: 'Zaron Cosmetics'
        },
        {
            id: 2,
            imageLink: '/images/partner2.png',
            name: 'Advanced Waste Projects'
        },
        {
            id: 3,
            imageLink: '/images/partner3.png',
            name: 'Laptop Clinic'
        },
        {
            id: 4,
            imageLink: '/images/partner4.png',
            name: 'Computer Villa'
        },
        {
            id: 5,
            imageLink: '/images/partner5.png',
            name: 'World Tech'
        },

    ]
    return (
        <div>
            <div
                className="bg-cover bg-no-repeat bg-center"
                style={{
                    backgroundImage: "url(https://img.freepik.com/premium-vector/abstract-3d-black-technology-background-overlap-layers-dark-space-with-orange-light-effect-decoration_135960-90.jpg)",
                }}
            >
                <div className="flex flex-col items-center bg-black bg-opacity-50 py-28">
                    <p className="text-white text-3xl font-semibold">About Us</p>
                    <div>
                        {/* use shad breadcrumbs */}
                        {/* <Breadcrumbs page="About" secondary /> */}
                    </div>
                </div>
            </div>
            <div className="bg-[#E5E5E5]">
                <div className="container flex flex-col md:flex-row items-center py-12 gap-4 ">
                    <div className="w-full md:w-[55%]">
                        <p className="uppercase text-primary font-medium text-base">Our history</p>
                        <p className="text-2xl text-gray-600 font-medium uppercase py-4">We are indeed the Hub of bits...</p>
                        <p>
                            Welcome to <span className="font-bold text-slate-800">Bits<span className="text-orange-500">hub</span></span> , your destination for cutting-edge gadgets. Discover the latest tech products that enhance your life. We offer smartphones, tablets, smart home devices, and more. Our team provides expert guidance and exceptional customer support. Trust us to bring you high-quality gadgets from top brands. Embrace the future of tech with <span className="font-bold text-slate-800">Bits<span className="text-orange-500">hub</span></span>.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="py-12 text-center">
                                <p className="text-primary text-4xl font-semibold">12</p>
                                <p>Years Experience</p>
                            </div>
                            <div className="py-12 text-center">
                                <p className="text-primary text-4xl font-semibold">1k</p>
                                <p>Happy Customers</p>
                            </div>
                            <div className="py-12 text-center">
                                <p className="text-primary text-4xl font-semibold">95%</p>
                                <p>Clients satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[45%] border-primary border">
                        <Image width={400} height={400} className="w-full h-full" src="/images/img-11.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="my-16 px-16 flex flex-col md:flex-row items-center gap-8 md:container">
                <div className="w-full md:w-[45%] h-full">
                    <Image className="w-full" width={400} height={400} src="/images/img-14.jpeg" alt="" />
                </div>
                <div className="w-full md:w-[55%]">
                    <p className="uppercase text-primary font-medium text-base">Our vision</p>
                    <p className="text-2xl text-gray-600 font-medium uppercase py-4">
                        OUR VISION IS SIMPLE - WE EXIST TO ACCELERATE OUR CUSTOMERS’ PROGRESS
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat ipsum quisquam nulla dolorem
                        dignissimos cum numquam harum aliquam recusandae praesentium similique cupiditate, deleniti, quo fugiat
                        incidunt nemo voluptates quam!
                    </p>
                    <ul>
                        <li>
                            <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We build strong relationships
                        </li>
                        <li>
                            <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We encourage initiative and provide
                            opportunity
                        </li>
                        <li>
                            <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We embrace change and creativity
                        </li>
                        <li>
                            <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We build strong relationships
                        </li>
                        <li>
                            <i className="fas fa-chevron-right text-sm text-primary pr-4 py-2"></i>We champion an environment of
                            honesty
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container text-center">
                <p className="text-2xl text-gray-600 font-medium uppercase py-4">Meet with our team</p>
                <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
                    {TeamData.teams.map((item) => {
                        return <TeamCard item={item} key={item.id} />;
                    })}
                </div>
            </div>
            <div className="container my-8 text-center">
                <p className="text-2xl text-gray-600 font-medium uppercase py-4">Our partners</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {partners.map((item) => {
                        return (
                            <div className="text-primary w-48 h-48  font-semibold text-base flex justify-end flex-col" key={item.id}>
                                <Image src={item.imageLink} height={150} width={150} alt='' className="" />
                                <h1>{item.name}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
