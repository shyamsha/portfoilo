import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: '84sjaoqh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})
