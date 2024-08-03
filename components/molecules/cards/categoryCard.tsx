import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryCard(
    // props here
) {
  return (
    <div className="relative rounded-sm overflow-hidden group">
    <Link href={''
        // `/category/${item.category}`
        }>
      {/* <Image src={item.img_url} alt="" className="w-full h-[100%] object-cover" /> */}
      <p
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
      >
        {/* {item.category} */}
        item category
      </p>
    </Link>
  </div>
  )
}
