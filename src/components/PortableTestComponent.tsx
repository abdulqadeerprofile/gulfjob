'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanityClient'
import Image from 'next/image'
import { PortableTextBlock } from '@portabletext/types'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string } }) => (
      <div className="relative my-6 w-full h-auto">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ' '}
          className="rounded-lg"
          width={800} // Adjust dimensions as needed
          height={500} // Adjust dimensions as needed
          layout="responsive" // Ensures better optimization
        />
      </div>
    ),
  },
}

export default function PortableTextComponent({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />
}
