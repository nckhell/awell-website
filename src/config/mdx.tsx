import rehypeSlug from 'rehype-slug'

import { Alert } from '@/components/Alert'
import { CodeTabs } from '@/components/CodeTabs'
import {
  ActionsTableSpecs,
  ActivityIndexSpecs,
  ActivityTableSpecs,
  CareFlowTableSpecs,
  DataPointDefinitionTableSpecs,
  DataPointIndexSpecs,
  DataPointTableSpecs,
  PathwayIndexSpecs,
  PatientProfileTableSpecs,
  PatientTableSpecs,
  StepIndexSpecs,
  StepsTableSpecs,
  TracksTableSpecs
} from '@/components/DataRepository'
import { Code, CustomH2, CustomH3 } from '@/components/Docs/atoms'
import { FAQ } from '@/components/FAQ'
import { HowToUse } from '@/components/HowToUse'
import { PostmanLinks } from '@/components/Links/PostmanLinks'
import { Properties } from '@/components/Properties'
import { SessionsAndLinksComparisonTable } from '@/components/SessionsAndLinksComparisonTable'
import { StoryBrowser } from '@/components/StoryBrowser'
import { TriggerCareFlowsComparison } from '@/components/TriggerCareFlowsComparison'
import { UseCasesComparisonTable } from '@/components/UseCasesComparisonTable'
import { Effort } from '@/components/UseCasesComparisonTable/atoms'
import { WebhooksList } from '@/components/Webhooks'

export const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug, // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
    ],
  },
}

export const mdxComponents = {
  h2: CustomH2,
  h3: CustomH3,
  pre: Code,
  //@ts-expect-error any type is okay for now
  CodeBlock: ({ props }) => <Code mode="jsx" {...props} />,
  UseCasesComparisonTable,
  SessionsAndLinksComparisonTable,
  TriggerCareFlowsComparison,
  Effort,
  HowToUse,
  Alert,
  FAQ,
  WebhooksList,
  WebhooksTable: WebhooksList,
  PostmanLinks,
  StoryBrowser,
  ActivityTableSpecs,
  CareFlowTableSpecs,
  DataPointDefinitionTableSpecs,
  DataPointTableSpecs,
  DataPointIndexSpecs,
  PathwayIndexSpecs,
  PatientProfileTableSpecs,
  PatientTableSpecs,
  StepIndexSpecs,
  ActivityIndexSpecs,
  CodeTabs,
  Properties,
  ActionsTableSpecs,
  StepsTableSpecs,
  TracksTableSpecs,
}
