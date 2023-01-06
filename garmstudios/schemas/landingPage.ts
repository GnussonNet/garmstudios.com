import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'The description of the page',
    },
  ],
})
