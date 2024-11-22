import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { rootRoutes } from '../routes'

export const ontologyNavigation: MainNavType = [
  {
    title: 'Home',
    slug: rootRoutes[Space.AWELL_ONTOLOGY].home,
    activeSlugCheck: Space.AWELL_ONTOLOGY,
  },
  {
    title: 'Docs',
    slug: rootRoutes[Space.AWELL_ONTOLOGY].docs,
    activeSlugCheck: 'docs',
  },
]
