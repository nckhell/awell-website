import { ReactNode } from 'react'

import { LinkButton } from '@/components/Button'
import { CodeTabs } from '@/components/CodeTabs'
import { CodeBlock } from '@/components/CodeTabs/atoms'
import { HomeLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { Effort } from '@/components/UseCasesComparisonTable/atoms/Effort'
import { Space } from '@/types/space.types'

export default function Home() {
  return (
    <>
      <SEO
        description="Explore our guides, API references, and examples to start integrating with Awell."
        url="/"
        canonicalUrl="/awell-score"
      />
      <div className="relative max-w-6xl mx-auto pt-4 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="text-slate-900 font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight dark:text-white">
            Awell Score
          </h1>
          <p className="mt-2 text-xl text-slate-600 dark:text-slate-400">
            Calculate clinically validated scores through our API.
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row">
          <div className="md:w-7/12">
            <div className="w-full md:w-11/12">
              <h2 className="text-slate-900 text-xl lg:text-2xl font-bold dark:text-white m-0 p-0">
                Get started with scores in less then a day
              </h2>
              <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
                Don&apos;t build score calculations yourself but leverage our
                easy to use API to get started with scores quickly.
              </p>
              <div className="mt-2">
                <div className="font-semibold">Effort:</div>
                <div className="pt-1">
                  <Effort effort={2} />
                </div>
              </div>
              <div className="mt-4">
                <LinkButton
                  label="Discover the API"
                  href={`/${Space.AWELL_SCORE}/docs/getting-started/playground`}
                  size="base"
                  color="sky"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-5/12">
            <div className="relative">
              <div className="z-10">
                <CodeTabs>
                  <CodeBlock language="javascript" fileName="request">
                    {`
{
  "endpoint": "https://score-api.staging.awellhealth.com/v2/calculations",
  "method": "POST",
  "body": {
    "calculation_id": "bmi",
    "calculation_input": {
      "height": "100",
      "weight": "170"
    }
  }
}
              `}
                  </CodeBlock>
                  <CodeBlock language="javascript" fileName="response">
                    {`
{
  "id": "63219d04228b1a00193b5879",
  "calculation_id": "bmi",
  "timestamp": "2022-09-14T09:21:08.350Z",
  "calculation_input": {
    "height": "100",
    "weight": "170"
  },
  "results": [
    {
      "subresult_id": "BMI",
      "label": {
        "en": "Body Mass Index"
      },
      "unit": {
        "en": "kg/m2"
      },
      "type": "number",
      "result": 170,
      "status": "CALCULATED"
    }
  ]
}
              `}
                  </CodeBlock>
                </CodeTabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="pb-16 text-sm leading-6">
        <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-600">
            <div className="leading-none text-slate-700 dark:text-slate-200">
              <svg className="w-32" viewBox="0 0 190 50">
                <g>
                  <path
                    id="svg_1"
                    d="m169.7,0l6.8,0l0,38.7l-6.8,0l0,-38.7zm13.3,0l6.8,0l0,38.7l-6.8,0l0,-38.7zm-38.5,24.5l12.4,-5.2c-0.6,-0.7 -1.4,-1.3 -2.3,-1.7c-0.9,-0.4 -1.9,-0.6 -3,-0.6c-1,0 -1.9,0.2 -2.8,0.6c-0.9,0.4 -1.6,0.9 -2.2,1.6c-0.6,0.7 -1.1,1.5 -1.5,2.4c-0.4,0.8 -0.6,1.8 -0.6,2.9m-6.4,0.4c0,-1.9 0.4,-3.7 1.1,-5.4s1.7,-3.1 2.9,-4.4s2.7,-2.2 4.3,-3c1.6,-0.7 3.4,-1.1 5.3,-1.1c1.6,0 3.1,0.2 4.5,0.7s2.7,1.2 3.9,2.1c1.1,0.9 2.1,2.1 2.9,3.5c0.8,1.4 1.4,2.9 1.6,4.7l-18.6,7.8c0.7,0.9 1.5,1.6 2.5,2.1c0.9,0.5 2,0.8 3.2,0.8c1.1,0 2.2,-0.2 3.2,-0.7c1,-0.5 1.8,-1.3 2.4,-2.3l7.2,0c-0.8,2.7 -2.3,4.9 -4.5,6.5c-2.2,1.7 -5,2.5 -8.3,2.5c-1.9,0 -3.6,-0.4 -5.3,-1.1c-1.6,-0.7 -3.1,-1.7 -4.3,-2.9c-1.2,-1.2 -2.2,-2.7 -2.9,-4.4c-0.8,-1.7 -1.1,-3.5 -1.1,-5.4m-44.9,2l0,-15.2l6.8,0l0,15.4c0,0.4 0.1,0.9 0.2,1.4c0.1,0.6 0.3,1.1 0.7,1.6c0.3,0.5 0.8,1 1.5,1.4c0.7,0.4 1.5,0.6 2.6,0.6c1.5,0 2.8,-0.5 3.7,-1.4c0.9,-0.9 1.4,-2.1 1.4,-3.6l0,-15.4l6.8,0l0,15.4c0,0.4 0.1,0.9 0.2,1.4s0.3,1.1 0.7,1.6c0.3,0.5 0.8,1 1.5,1.4c0.7,0.4 1.5,0.6 2.7,0.6c1.5,0 2.7,-0.5 3.7,-1.4c1,-0.9 1.4,-2.1 1.4,-3.6l0,-15.4l6.8,0l0,15.2c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.4 -1.4,2.7 -2.4,3.8c-1,1.1 -2.3,1.9 -3.8,2.5c-1.5,0.6 -3.1,0.9 -4.9,0.9c-1.8,0 -3.4,-0.3 -4.8,-1s-2.6,-1.6 -3.6,-2.7c-1,1.2 -2.2,2.1 -3.6,2.7c-1.4,0.7 -3,1 -4.8,1c-1.8,0 -3.5,-0.3 -4.9,-0.9c-1.4,-0.6 -2.7,-1.4 -3.7,-2.4s-1.8,-2.3 -2.3,-3.7c-0.7,-1.6 -1,-3.2 -1,-4.9m-25.4,-2c0,1 0.2,2 0.5,2.9c0.4,0.9 0.8,1.7 1.5,2.4c0.6,0.7 1.3,1.2 2.2,1.6c0.8,0.4 1.7,0.6 2.6,0.6s1.8,-0.2 2.6,-0.6c0.8,-0.4 1.6,-0.9 2.2,-1.6c0.6,-0.7 1.1,-1.5 1.5,-2.4c0.4,-0.9 0.5,-1.9 0.5,-2.9s-0.2,-2 -0.5,-3c-0.4,-0.9 -0.8,-1.7 -1.5,-2.4c-0.6,-0.7 -1.3,-1.2 -2.2,-1.6c-0.8,-0.4 -1.7,-0.6 -2.6,-0.6c-0.9,0 -1.8,0.2 -2.6,0.6c-0.8,0.4 -1.5,0.9 -2.2,1.6c-0.6,0.7 -1.1,1.5 -1.5,2.4c-0.3,0.9 -0.5,1.9 -0.5,3m-6.8,0c0,-1.9 0.3,-3.7 1,-5.4c0.7,-1.7 1.6,-3.1 2.8,-4.4c1.2,-1.2 2.6,-2.2 4.3,-2.9c1.7,-0.7 3.5,-1.1 5.5,-1.1s3.8,0.4 5.5,1.1c1.7,0.7 3.1,1.7 4.3,3c1.2,1.2 2.1,2.7 2.8,4.4c0.7,1.7 1,3.5 1,5.4l0,13.8l-6.4,0l0,-3.5c-1,1.1 -2.2,1.9 -3.6,2.5c-1.4,0.6 -2.9,0.8 -4.5,0.8c-1.7,0 -3.4,-0.4 -4.9,-1.1c-1.5,-0.7 -2.9,-1.7 -4,-3c-1.2,-1.2 -2.1,-2.7 -2.7,-4.4c-0.8,-1.5 -1.1,-3.3 -1.1,-5.2"
                    fill="currentColor"
                  />
                  <path
                    id="svg_2"
                    fill="currentColor"
                    d="m7.3,21.7c1.4,-7.4 7.2,-13.2 14.6,-14.6l0,-6.8c-11.1,1.4 -20,10.2 -21.6,21.4l7,0zm21.4,-14.6c8.5,1.6 14.9,9 14.9,18c0,3.8 -1.2,7.4 -3.2,10.3l4.9,4.9c3.2,-4.2 5,-9.4 5,-15.1c0.1,-12.7 -9.3,-23.2 -21.6,-24.9l0,6.8zm7,33.1c-2.9,2 -6.5,3.2 -10.3,3.2c-9,0 -16.4,-6.4 -18,-14.9l-7,0c1.6,12.4 12.2,21.9 25,21.9c5.8,0 11.1,-2 15.4,-5.2l-5.1,-5z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
