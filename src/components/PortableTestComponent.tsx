'use client'

import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanityClient'

const components = {
  types: {
    image: ({ value }: any) => (
      <img
        src={urlFor(value).url()}
        alt={value.alt || ' '}
        className="my-6 rounded-lg"
      />
    ),
  },
}

export default function PortableTextComponent({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}