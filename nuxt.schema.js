import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    site: group({
      title: 'Site',
      description: 'Site configuration',
      icon: 'i-mdi-web',
      fields: {
        title: field({
          type: 'string',
          title: 'Site Title',
          description: 'The title of the website',
          icon: 'i-mdi-format-title'
        }),
        description: field({
          type: 'string',
          title: 'Site Description',
          description: 'The description of the website',
          icon: 'i-mdi-format-title'
        }),
        lang: field({
          type: 'string',
          title: 'Site Language',
          description: 'The language of the website',
          icon: 'i-mdi-web'
        })
      }
    }),
    // socials: group({
    //   title: 'Socials',
    //   description: 'Social links',
    //   icon: 'i-mdi-web',
    //   fields: {
    //     ig: field({
    //       type: 'string',
    //       title: 'Instagram',
    //       description: 'Instagram social handle',
    //       icon: 'i-mdi-instagram'
    //     }),
    //     github: field({
    //       type: 'string',
    //       description: 'Github social handle',
    //       icon: 'i-mdi-github'
    //     })
    //   }
    // })
  }
})
