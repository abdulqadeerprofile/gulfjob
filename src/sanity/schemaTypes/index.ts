import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import { postType } from './postType'
import { categoryType } from './categoryType'
import { authorType } from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Core content types
    postType,
    blockContentType,
    
    // Supporting types
    categoryType,
    authorType,

    // Add any additional content types here
  ],
}