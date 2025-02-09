// app/blog/[slug]/page.tsx
import { createClient } from '@sanity/client'
import { notFound } from 'next/navigation'
import { BuildingOffice2Icon } from '@heroicons/react/24/outline'
import PortableTextComponent from '@/components/PortableTestComponent'
import { urlFor } from '@/lib/sanityClient'
import type { Metadata } from 'next'
import Image from 'next/image'

const sanityClient = createClient({
  projectId: '5g7hrg0s',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      company,
      excerpt,
      mainImage {
        asset->{url}
      },
      seo {
        metaTitle,
        metaDescription,
        keywords
      }
    }`,
    { slug: params.slug }
  )

  if (!post) return {}

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt?.slice(0, 160),
    keywords: post.seo?.keywords?.join(', ') || '',
    alternates: {
      canonical: `https://yourdomain.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt?.slice(0, 160),
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.mainImage?.asset?.url ? [
        {
          url: urlFor(post.mainImage).width(1200).url(),
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt?.slice(0, 160),
      images: post.mainImage?.asset?.url ? [
        {
          url: urlFor(post.mainImage).width(1200).url(),
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    company,
    mainImage {
      asset->{url},
      alt
    },
    body,
    excerpt,
    slug,
    publishedAt,
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }`

  const post = await sanityClient.fetch(query, { slug: params.slug })

  if (!post) notFound()

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.seo?.metaTitle || post.title,
    "description": post.seo?.metaDescription || post.excerpt,
    "image": post.mainImage?.asset?.url ? [urlFor(post.mainImage).width(1200).url()] : [],
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": post.company || "Citibank UAE"
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article className="prose dark:prose-invert max-w-none">
        <header>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          {post.company && (
            <div className="flex items-center mb-8 text-xl">
              <BuildingOffice2Icon className="w-6 h-6 mr-2" />
              <span className="font-medium">{post.company}</span>
            </div>
          )}

          {post.mainImage?.asset?.url && (
            <div className="relative w-full h-64 mb-8">
              <Image
                src={urlFor(post.mainImage).width(1200).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          )}
        </header>

        {post.excerpt && (
          <section className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            <p className="lead">{post.excerpt}</p>
          </section>
        )}

        {post.body && (
          <section className="space-y-6">
            <PortableTextComponent value={post.body} />
          </section>
        )}
      </article>
    </div>
  )
}