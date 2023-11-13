const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Nacho Tineo -- Blog',
    description: 'Explora el apasionante mundo de la tecnología y el software aquí, un espacio creado por un programador para programadores. Descubre análisis detallados, tutoriales prácticos y las últimas tendencias en desarrollo de software. Mejora tus habilidades mientras exploras temas como optimización de código, mejores prácticas y tecnologías emergentes. ¡Desarrolla tu conocimiento y creatividad en el mundo del desarrollo de software!',
    site_url: 'https://blog.nachotineo.com/',
    feed_url: 'https://blog.nachotineo.com/feed.xml'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'posts', name)
      )
      const frontmatter = matter(content)


      feed.item({
        title: frontmatter.data.title,
        url: '/posts/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(','),
        author: frontmatter.data.author
      })
    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
