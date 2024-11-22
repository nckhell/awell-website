import { Space } from '@/types/space.types'

import { rootRoutes } from '../config/routes'

export const spaces: { label: string; path: string; active?: boolean }[] = [
  {
    label: 'Awell Ontology',
    path: rootRoutes[Space.AWELL_ONTOLOGY].docs,
  },
  {
    label: 'Awell Studio',
    path: rootRoutes[Space.AWELL_STUDIO].docs,
  },
  {
    label: 'Awell Orchestration',
    path: rootRoutes[Space.AWELL_ORCHESTRATION].docs,
  },
  {
    label: 'Awell Extensions',
    path: rootRoutes[Space.AWELL_EXTENSIONS].home,
  },
  {
    label: 'Awell Score',
    path: rootRoutes[Space.AWELL_SCORE].docs,
  },
]
