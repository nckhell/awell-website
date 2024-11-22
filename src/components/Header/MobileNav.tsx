import Link from 'next/link'
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
import { ThemeSelect } from '../ThemeToggle'

export const MobileNav = () => {
  const [navigation, setNavigation] = useState<MainNavType>([])

  const { space, isMobileMainMenuOpen, toggleMobileMainMenu } =
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

  if (!isMobileMainMenuOpen) return null

  return (
    <div
      className="fixed z-50 inset-0 lg:hidden"
      id="headlessui-dialog-11"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        id="headlessui-dialog-overlay-16"
        aria-hidden="true"
      ></div>
      <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
        <button
          type="button"
          onClick={() => toggleMobileMainMenu()}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          tabIndex={0}
        >
          <span className="sr-only">Close navigation</span>
          <svg
            viewBox="0 0 10 10"
            className="w-2.5 h-2.5 overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
        <ul className="space-y-6">
          {navigation.map((navItem) => (
            <li key={`${space}-${navItem.slug}`}>
              <Link
                href={navItem.slug}
                className="hover:text-sky-500 dark:hover:text-sky-400"
                title={navItem.title}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://awellhealth.atlassian.net/wiki/spaces/AH/pages/3560275979/What+s+New"
              title="Changelog"
              className="hover:text-sky-500 dark:hover:text-sky-400"
            >
              Changelog
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="hover:text-sky-500 dark:hover:text-sky-400"
              title="FAQ"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/system-status"
              className="hover:text-sky-500 dark:hover:text-sky-400"
              title="System status"
            >
              System status
            </Link>
          </li>
          <li>
            <a
              href="https://awell.health"
              target="_blank"
              title="Awell website"
              className="hover:text-sky-500 dark:hover:text-sky-400"
              rel="noreferrer"
            >
              Awell Website
            </a>
          </li>
        </ul>
        <div className="hidden mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
          <ThemeSelect />
        </div>
      </div>
    </div>
  )
}
