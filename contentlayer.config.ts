import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the article',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the article',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the article',
      required: true,
    },
  },
  computedFields: {
    readingTime: { type: 'json', resolve: doc => readingTime(doc.body.raw) },
    slug: {
      type: 'string',
      resolve: doc => `${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog],
})
