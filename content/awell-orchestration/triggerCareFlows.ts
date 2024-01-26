import { Space } from '@/types/space.types'

export type CategoryType = {
  name: string
  href: string
  description: string
  useWhen: string
  effort: number
}

export type SectionType = {
  name: string
  features: Array<{
    name: string
    join?: boolean
    categories: {
      [key in string]: boolean | string
    }
  }>
}

export const sessionsAndLink: CategoryType[] = [
  {
    name: 'Awell Hosted Pages Link',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `By pressing a link`,
    useWhen: 'Patient self-enrollment',
    effort: 1,
  },
  {
    name: 'Awell API',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `By calling our API`,
    useWhen: 'You want maximum control and flexibility',
    effort: 3,
  },
  {
    name: 'Incoming webhooks',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `Based on events in external systems`,
    useWhen: 'You want external system to trigger a care flow',
    effort: 2,
  },
  {
    name: 'File uploads',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `With a CSV, XML, JSON file`,
    useWhen:
      'You want a convenient and easy way to trigger care flows in batch',
    effort: 1,
  },
  {
    name: 'ADT feeds',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
    description: `By listening to ADT messages`,
    useWhen: 'Start care flows based on ADT messages',
    effort: 3,
  },
  {
    name: 'Awell Care',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-activity-guide`,
    description: "Via Awell's app",
    useWhen: `You're using Awell Care to operate care flows`,
    effort: 1,
  },
]

export const sections: SectionType[] = [
  {
    name: 'Details',
    features: [
      {
        name: 'Triggered by',
        categories: {
          'Awell Care': 'Care team member',
          'Awell Hosted Pages Link': 'Patient',
          'Awell API': 'Call to our API',
          'Incoming webhooks': 'Event in external system',
          'File uploads': 'Uploading a file',
          'ADT feeds': 'receival of ADT message',
        },
      },
      {
        name: 'Patient self-enrollment',
        categories: {
          'Awell Care': false,
          'Awell Hosted Pages Link': true,
          'Awell API': true,
          'Incoming webhooks': false,
          'File uploads': false,
          'ADT feeds': false,
        },
      },
      {
        name: 'Real-time',
        categories: {
          'Awell Care': true,
          'Awell Hosted Pages Link': true,
          'Awell API': true,
          'Incoming webhooks': true,
          'File uploads': false,
          'ADT feeds': true,
        },
      },
      {
        name: 'Batch',
        categories: {
          'Awell Care': false,
          'Awell Hosted Pages Link': false,
          'Awell API': false,
          'Incoming webhooks': false,
          'File uploads': true,
          'ADT feeds': false,
        },
      },
    ],
  },
]
