import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

import {
  defaultNavigation,
  extensionsNavigation,
  ontologyNavigation,
  orchestrationNavigation,
  scoreNavigation,
  studioNavigation,
} from '@/config/navigation'
import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { AppContext } from '../../contexts/app/AppContext'
import { Badge } from '../Badge'
import { SearchButton } from '../Sidebar/atoms/SearchButton'
import { SpaceSwitcher } from '../SpaceSwitcher'
import { ThemeToggle } from '../ThemeToggle'

const MobileMainMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="ml-2 -my-1 lg:hidden lg:ml-auto">
      <button
        type="button"
        onClick={() => onClick()}
        className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <span className="sr-only">Navigation</span>
        <svg width={24} height={24} fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export const Header = () => {
  const router = useRouter()
  const [navigation, setNavigation] = useState<MainNavType>([])
  const { menu, space, toggleMobileSideMenu, toggleMobileMainMenu } =
    useContext(AppContext)

  useEffect(() => {
    if (space === Space.AWELL_ONTOLOGY) {
      setNavigation(ontologyNavigation)
    } else if (space === Space.AWELL_ORCHESTRATION) {
      setNavigation(orchestrationNavigation)
    } else if (space === Space.AWELL_SCORE) {
      setNavigation(scoreNavigation)
    } else if (space === Space.AWELL_EXTENSIONS) {
      setNavigation(extensionsNavigation)
    } else if (space === Space.AWELL_STUDIO) {
      setNavigation(studioNavigation)
    } else {
      setNavigation(defaultNavigation)
    }
  }, [space])

  return (
    <>
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
        <div className="py-4">
          <div className="container">
            <div className="relative flex items-center">
              <Link
                href="/"
                className="mr-1 sm:mr-3 flex-none w-[1.9rem] overflow-hidden md:w-auto"
                title="Awell Health Developers"
              >
                <span className="sr-only">Awell Health Developer Hub</span>
                <div className="leading-none text-blue-600 dark:text-slate-200">
                  <svg className="w-24" viewBox="0 0 190 50">
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
              </Link>
              <div className="hidden sm:block">
                <Badge color="sky">Developer Hub</Badge>
              </div>
              <div className="sm:hidden">
                <Badge color="sky">Dev Hub</Badge>
              </div>
              <div className="ml-2">
                <SpaceSwitcher />
              </div>
              <div className="flex ml-auto">
                <div className="flex items-center lg:w-56 lg:block">
                  <SearchButton />
                </div>
                <div className="relative hidden lg:flex items-center lg:ml-auto">
                  <div className="flex items-center border-l border-slate-200 ml-6 dark:border-slate-800">
                    <div className="flex items-center hidden">
                      <label
                        className="sr-only"
                        id="headlessui-listbox-label-18"
                      >
                        Theme
                      </label>
                      <ThemeToggle />
                    </div>
                    <div>
                      <a
                        href="https://github.com/awell-health/developer-hub"
                        target="_blank"
                        className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                        rel="noreferrer"
                        data-track-heap="open-github-repo"
                      >
                        <span className="sr-only">
                          Awell Developers on GitHub
                        </span>
                        <svg
                          viewBox="0 0 16 16"
                          className="w-5 h-5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <MobileMainMenu onClick={toggleMobileMainMenu} />
            </div>
          </div>
        </div>
        <div className="border-b border-slate-900/10 lg:border-0 dark:border-slate-300/10"></div>
        <div className="hidden lg:block">
          <div className="container">
            <div className="flex space-between">
              <div>
                <ul className="flex">
                  {navigation.map((navItem) => {
                    const isNavItemActive =
                      navItem.title === 'Home'
                        ? router.asPath === `/${navItem.activeSlugCheck}`
                        : router.asPath.includes(navItem.activeSlugCheck)

                    return (
                      <li className="mr-8" key={`${space}-${navItem.slug}`}>
                        <Link
                          href={navItem.slug}
                          title={navItem.title}
                          className={`border-b border-transparent block font-semibold text-sm text-slate-700 dark:text-white pb-2 hover:border-b hover:border-blue-700 dark:hover:border-sky-400 ${
                            isNavItemActive
                              ? 'border-b border-blue-700 text-blue-700 dark:border-sky-400 dark:text-sky-400'
                              : ''
                          }`}
                        >
                          {navItem.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="ml-auto">
                <ul className="flex">
                  <li>
                    <Link
                      href="https://awellhealth.atlassian.net/wiki/spaces/AH/pages/3560275979/What+s+New"
                      title="Changelog"
                      className="mr-8 block font-semibold text-sm text-slate-700 dark:text-white pb-2 hover:border-b border-blue-700 dark:hover:border-sky-400"
                    >
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      title="FAQ"
                      className={`mr-8 block font-semibold text-sm text-slate-700 dark:text-white pb-2 hover:border-b border-blue-700 dark:hover:border-sky-400 ${
                        router.asPath === '/faq'
                          ? 'border-b border-blue-700 text-blue-700 dark:border-sky-400 dark:text-sky-400'
                          : ''
                      }`}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/system-status"
                      title="System status"
                      className={`mr-8 block font-semibold text-sm text-slate-700 dark:text-white pb-2 hover:border-b border-blue-700 dark:hover:border-sky-400 ${
                        router.asPath === '/system-status'
                          ? 'border-b border-blue-700 text-blue-700 dark:border-sky-400 dark:text-sky-400'
                          : ''
                      }`}
                    >
                      System status
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.awellhealth.com/"
                      title="Awell Website"
                      target="_blank"
                      className="block font-semibold text-sm text-slate-700 dark:text-white pb-2 hover:border-b border-blue-700 dark:hover:border-sky-400"
                    >
                      Awell Website
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {menu.length > 0 && (
          <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
            <button
              type="button"
              onClick={() => toggleMobileSideMenu()}
              className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="sr-only">Navigation</span>
              <svg width={24} height={24}>
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
