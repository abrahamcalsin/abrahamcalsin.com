import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const articlesDirectory = join(process.cwd(), '_articles')

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory)
}

export function getArticleBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(articlesDirectory, `${realSlug}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContent)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllArticles(fields: string[] = []) {
  const slugs = getArticleSlugs()

  const articles = slugs
    .map(slug => getArticleBySlug(slug, fields))
    // Sort articles by date in descending order
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1))

  return articles
}
