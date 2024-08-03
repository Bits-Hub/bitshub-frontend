import Image from 'next/image'
import React from 'react'

export default function TeamCard({item}: {
item: {
  id: number;
  name: string;
  email: string;
  title: string;
  social: string;
  img: string;
}
}) {

  return (
    <div className="bg-white  rounded shadow  overflow-hidden group border rounded-t-2xl  space-y-8  ">
      <div className=" w-full mx-auto ">
        <Image
          src={item.img}
          alt="avatar"
          width={176}
          height={176}
          className=" h-44 w-44 mx-auto mt-4 border rounded-full object-fit"
        />
      </div>
      <div className="pt-4 pb-3 px-2">
        <p className="font-medium mb-2">{item.name}</p>
        <p className="text-xs text-gray-800">{item.title}</p>
        <div>
          <a href="/" className="text-xs text-gray-500">
            {item.email}
          </a>
        </div>
      </div>
    </div>
  )
}
