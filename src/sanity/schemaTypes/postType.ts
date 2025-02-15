import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().max(70).warning('Optimal length is 50-60 characters for SEO'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company Name',
      description: 'Optional company name',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          validation: (Rule) => 
            Rule.max(60).warning('Recommended length: 50-60 characters'),
        }),
        defineField({
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          rows: 3,
          validation: (Rule) => 
            Rule.max(160).warning('Recommended length: 150-160 characters'),
        }),
        defineField({
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        }),
      ],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Featured Image',
      options: { 
        hotspot: true,
        metadata: ['lqip'],
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: Rule => Rule.required().max(125),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      rows: 3,
      validation: (Rule) => Rule.max(200).required(),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Content',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publish Date',
      validation: Rule => Rule.required(),
      initialValue: (new Date()).toISOString(),
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
      title: 'Last Updated',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      company: 'company',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { company, publishedAt } = selection
      return {
        ...selection,
        subtitle: `${company ? `Company: ${company} • ` : ''}${new Date(publishedAt).toLocaleDateString()}`
      }
    },
  },
})