import { Space } from '@/types/space.types'

type Routes = {
  home: string
  docs: string
  api: string
  developerTools: string
}

export const rootRoutes: Record<Space, Routes> = {
  [Space.AWELL_ONTOLOGY]: {
    home: `/${Space.AWELL_ONTOLOGY}/docs/getting-started/overview`,
    docs: `/${Space.AWELL_ONTOLOGY}/docs/getting-started/overview`,
    api: '#',
    developerTools: '#',
  },
  [Space.AWELL_STUDIO]: {
    home: `/${Space.AWELL_STUDIO}`,
    docs: `/${Space.AWELL_STUDIO}/docs/getting-started/studio-introduction`,
    api: '#',
    developerTools: '#',
  },
  [Space.AWELL_ORCHESTRATION]: {
    home: `/${Space.AWELL_ORCHESTRATION}`,
    docs: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/orchestration-introduction`,
    api: `/${Space.AWELL_ORCHESTRATION}/api-reference/overview/graphql-api`,
    developerTools: `/${Space.AWELL_ORCHESTRATION}/developer-tools/changelog`,
  },
  [Space.AWELL_EXTENSIONS]: {
    home: `/${Space.AWELL_EXTENSIONS}`,
    docs: `/${Space.AWELL_EXTENSIONS}/docs/getting-started/what-are-awell-extensions`,
    api: `#api-route`,
    developerTools: `#developer-tools-route`,
  },
  [Space.AWELL_SCORE]: {
    home: `/${Space.AWELL_SCORE}`,
    docs: `/${Space.AWELL_SCORE}/docs/getting-started/what-is-awell-score`,
    api: ``,
    developerTools: ``,
  },
}
