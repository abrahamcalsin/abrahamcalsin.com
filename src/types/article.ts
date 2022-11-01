import type * as React from 'react'
import { Blog } from 'contentlayer/generated'

/**
 * @Article Document(Blog) types
 */
type Article = Pick<Blog, '_raw' | 'type' | '_id' | 'title' | 'slug' | 'description' | 'date' | 'body' | 'readingTime'>

export type { Article }
