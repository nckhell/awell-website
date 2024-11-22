/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ReactNode } from 'react'

import { LinkButton } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { HomeLayout } from '@/components/Layouts'
import { RandomExtensionsPanel } from '@/components/Marketplace/molecules/RandomExtensionsPanel/RandomExtensionsPanel'
import { SEO } from '@/components/SEO'
import { rootRoutes } from '@/config/routes'
import { Space } from '@/types/space.types'

const domains = [
  {
    url: rootRoutes[Space.AWELL_ONTOLOGY].home,
    title: 'Awell Ontology',
    icon: (
      <svg
        viewBox="0 0 100 100"
        width="100pt"
        height="100pt"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m7.5 10v80.023c0 2.6484 1.0508 5.1992 2.9258 7.0742s4.4258 2.9258 7.0742 2.9258h65.023c5.5234 0 10-4.4766 10-10v-80.023c0-2.6484-1.0508-5.1992-2.9258-7.0742s-4.4258-2.9258-7.0742-2.9258h-65.023c-2.6484 0-5.1992 1.0508-7.0742 2.9258s-2.9258 4.4258-2.9258 7.0742zm80 10v70c0 2.75-2.2266 5-5 5h-65c-1.3242 0-2.6016-0.52344-3.5234-1.4492-0.92578-0.94922-1.4492-2.1992-1.4492-3.5234l-0.003906-70.027h75zm-50 56.375c0-3.5234-2.8516-6.375-6.375-6.375h-7.2266c-3.5234 0-6.375 2.8516-6.375 6.375v7.2266c0 3.5234 2.8516 6.375 6.375 6.375h7.2266c3.5234 0 6.375-2.8516 6.375-6.375zm7.5 11.125h17.5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-17.5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm-12.5-11.125v7.2266c0 0.77344-0.625 1.375-1.375 1.375h-7.2266c-0.77344 0-1.375-0.625-1.375-1.375v-7.2266c0-0.77344 0.625-1.375 1.375-1.375h7.2266c0.77344 0 1.375 0.625 1.375 1.375zm12.5 1.125h35c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-35c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm-7.5-23.625c0-3.5234-2.8516-6.375-6.375-6.375h-7.2266c-3.5234 0-6.375 2.8516-6.375 6.375v7.2266c0 3.5234 2.8516 6.375 6.375 6.375h7.2266c3.5234 0 6.375-2.8516 6.375-6.375zm7.5 11.125h17.5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-17.5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm-12.5-11.125v7.2266c0 0.77344-0.625 1.375-1.375 1.375h-7.2266c-0.77344 0-1.375-0.625-1.375-1.375v-7.2266c0-0.77344 0.625-1.375 1.375-1.375h7.2266c0.77344 0 1.375 0.625 1.375 1.375zm12.5 1.125h35c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-35c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm-7.5-23.625c0-3.5234-2.8516-6.375-6.375-6.375h-7.2266c-3.5234 0-6.375 2.8516-6.375 6.375v7.2266c0 3.5234 2.8516 6.375 6.375 6.375h7.2266c3.5234 0 6.375-2.8516 6.375-6.375zm7.5 11.125h17.5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-17.5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm-12.5-11.125v7.2266c0 0.77344-0.625 1.375-1.375 1.375h-7.2266c-0.77344 0-1.375-0.625-1.375-1.375v-7.2266c0-0.77344 0.625-1.375 1.375-1.375h7.2266c0.77344 0 1.375 0.625 1.375 1.375zm12.5 1.125h35c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-35c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5zm42.5-17.5h-75v-5c0-1.3242 0.52344-2.6016 1.4492-3.5234 0.94922-0.92578 2.1992-1.4492 3.5234-1.4492h65.023c1.3242 0 2.6016 0.52344 3.5234 1.4492 0.92578 0.94922 1.4492 2.1992 1.4492 3.5234v5zm-7.5-7.5c1.375 0 2.5 1.125 2.5 2.5s-1.125 2.5-2.5 2.5-2.5-1.125-2.5-2.5 1.125-2.5 2.5-2.5zm-7.5 0c1.375 0 2.5 1.125 2.5 2.5s-1.125 2.5-2.5 2.5-2.5-1.125-2.5-2.5 1.125-2.5 2.5-2.5zm-52.5 5h12.5c1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5h-12.5c-1.375 0-2.5 1.125-2.5 2.5s1.125 2.5 2.5 2.5z"
          fill="#fff"
          fillRule="evenodd"
        />
      </svg>
    ),
    description:
      'Your starting point to understand how care flows and data are modeled in Awell.',
  },
  {
    url: rootRoutes[Space.AWELL_STUDIO].docs,
    title: 'Awell Studio',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
    description: 'Design, build, and publish care flows in our no-code editor.',
  },
  {
    url: rootRoutes[Space.AWELL_ORCHESTRATION].docs,
    title: 'Awell Orchestration',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    description:
      'Run your care flows, built with Awell Studio, for your patient population and embed them into your tech stack.',
  },
  {
    url: rootRoutes[Space.AWELL_EXTENSIONS].home,
    title: 'Awell Extensions',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
        />
      </svg>
    ),
    description:
      'An SDK that allows your developers to build their own piece of software to extend the capabilities of the Awell Platform.',
  },
  {
    url: rootRoutes[Space.AWELL_SCORE].home,
    title: 'Awell Score',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
        />
      </svg>
    ),
    description:
      'A standalone API developed by the Awell team to calculate validated scores for clinical & patient reported outcome measures.',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        description="Explore our guides, API references, and examples to start integrating with Awell."
        url=""
        canonicalUrl=""
      />
      <div className="relative max-w-6xl mx-auto pt-4 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8">
        <div>
          <div className="overflow-hidden py-4 lg:py-8">
            <div>
              <div className="relative">
                <h2 className="mb-0 text-center text-3xl font-bold leading-8 tracking-tight text-slate-900 sm:text-4xl">
                  Welcome
                </h2>
                <p className="mx-auto mt-2 max-w-3xl text-center text-xl text-slate-500 dark:text-slate-400">
                  It&apos;s Awell&apos;s mission to make care flows work harder
                  than care teams.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2
            id="integrate-with-awell"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-0"
          >
            Documentation
          </h2>
          <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
            Browse our documentation, guides, and APIs by product area.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {domains.map((d) => (
              <Link
                href={d.url}
                key={d.title}
                className="block group relative rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
                  <div className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
                    <div>
                      <div className="bg-blue-600 text-white dark:bg-sky-400 rounded-lg p-1.5 inline-block">
                        {d.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold dark:text-sky-400">
                        {d.title}
                      </h3>
                      <span className="pt-2">{d.description}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h3
            id="integrate-with-awell"
            className="text-xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-0"
          >
            Marketplace
          </h3>
          <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
            Browse our Marketplace and find extensions that bring your care
            flows to the next level.
          </p>
          <div className="mt-6">
            <RandomExtensionsPanel n={4} cols={4} cardType="condensed" />
          </div>
          <div className="mt-4 flex justify-center">
            <LinkButton
              label="Browse all extensions"
              color="sky"
              href={`/${Space.AWELL_EXTENSIONS}/marketplace`}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
