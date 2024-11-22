import { Space } from '@/types/space.types'

import { type MenuType } from '../../../types/menu.types'

export const docsMenu: MenuType = [
  {
    title: 'Getting started',
    path: `/${Space.AWELL_ONTOLOGY}/docs/getting-started/overview`,
    submenu: [
      {
        title: 'Introduction',
        path: `/${Space.AWELL_ONTOLOGY}/docs/getting-started/overview`,
      },
      {
        title: 'Core concepts',
        path: `/${Space.AWELL_ONTOLOGY}/docs/getting-started/core-concepts`,
      },
      {
        title: 'Design vs. Orchestration',
        path: `/${Space.AWELL_ONTOLOGY}/docs/getting-started/design-vs-orchestration`,
      },
    ],
  },
  {
    title: 'Care flow data',
    path: `/${Space.AWELL_ONTOLOGY}/docs/care-flow-data/overview`,
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ONTOLOGY}/docs/care-flow-data/overview`,
      },
    ],
  },
  {
    title: 'Patient demographics data',
    path: `/${Space.AWELL_ONTOLOGY}/docs/patient-demographics-data/overview`,
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ONTOLOGY}/docs/patient-demographics-data/overview`,
      },
      {
        title: 'Patient',
        path: `/${Space.AWELL_ONTOLOGY}/docs/patient-demographics-data/patient`,
      },
    ],
  },
  {
    title: 'Diagnostics data',
    path: `/${Space.AWELL_ONTOLOGY}/docs/diagnostics-data/overview`,
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ONTOLOGY}/docs/diagnostics-data/overview`,
      },
      {
        title: 'Observation',
        path: `/${Space.AWELL_ONTOLOGY}/docs/diagnostics-data/observation`,
      },
      {
        title: 'Questionnaire',
        path: `/${Space.AWELL_ONTOLOGY}/docs/diagnostics-data/questionnaire`,
      },
    ],
  },
]
