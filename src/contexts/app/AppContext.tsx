import { useRouter } from 'next/router'
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import slugify from 'slugify'

import { ThemeContext } from '@/hooks/useTheme'
import { Space } from '@/types/space.types'

import { type MenuType } from '../../types/menu.types'
import { TableOfContentsType } from '../../types/toc.types'

interface AppContextStateType {
  menu: MenuType
  space: null | Space
  isMobileSideMenuOpen: boolean
  isMobileMainMenuOpen: boolean
  setMenu: (menu: MenuType) => void
  toggleMobileMainMenu: () => void
  toggleMobileSideMenu: () => void
  tableOfContents: TableOfContentsType | null
  setTableOfContents: (
    content: string,
    tocArray?: { title: string; link: string; level: 'h2' | 'h3' }[]
  ) => void
}

const initialState: AppContextStateType = {
  menu: [],
  space: null,
  isMobileSideMenuOpen: false,
  isMobileMainMenuOpen: false,
  setMenu: () => null,
  toggleMobileMainMenu: () => null,
  toggleMobileSideMenu: () => null,
  tableOfContents: null,
  setTableOfContents: () => null,
}

export const AppContext = React.createContext<AppContextStateType>(initialState)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const { isDarkMode } = useContext(ThemeContext)

  const router = useRouter()

  const [isMobileSideMenuOpen, setIsSideMobileMenuOpen] = useState<boolean>(
    initialState.isMobileSideMenuOpen
  )
  const [toc, setToc] = useState<TableOfContentsType | null>(
    initialState.tableOfContents
  )
  const [isMobileMainMenuOpen, setIsMainMobileMenuOpen] = useState<boolean>(
    initialState.isMobileMainMenuOpen
  )
  const [space, setSpace] = useState(initialState.space)

  const [menu, setNewMenu] = useState<MenuType>(initialState.menu)

  const toggleMobileSideMenu = () =>
    setIsSideMobileMenuOpen(!isMobileSideMenuOpen)

  const toggleMobileMainMenu = () =>
    setIsMainMobileMenuOpen(!isMobileMainMenuOpen)

  const setMenu = (menu: MenuType) => setNewMenu(menu)

  const getHeadingLevelFromMarkdown = (heading: string) => {
    switch (heading.trim()) {
      case '##':
        return 'h2'
      case '###':
        return 'h3'
      default:
        return 'h4'
    }
  }

  const setTableOfContents = useCallback(
    (
      content: string,
      tocArray?: { title: string; link: string; level: 'h2' | 'h3' }[]
    ) => {
      if (tocArray) {
        setToc(tocArray)
      } else {
        const regexp = new RegExp(/^(##+) (.*)\n/, 'gm')
        const headings = [...content.matchAll(regexp)]
        const tableOfContents: TableOfContentsType = headings.map((heading) => {
          const headingText = heading[2].trim()
          const headingLevel = getHeadingLevelFromMarkdown(heading[1])
          const headingLink = slugify(headingText, {
            lower: true,
            strict: true,
          })
          return {
            title: headingText,
            link: `#${headingLink}`,
            level: headingLevel,
          }
        })

        if (headings.length) {
          setToc(tableOfContents)
        } else {
          setToc(null)
        }
      }
    },
    []
  )

  const hideMenu = useCallback(() => {
    setIsSideMobileMenuOpen(false)
    setIsMainMobileMenuOpen(false)
  }, [setIsSideMobileMenuOpen, setIsMainMobileMenuOpen])

  useEffect(() => {
    // subscribe
    router.events.on('routeChangeStart', hideMenu)

    // unsubscribe
    return () => router.events.off('routeChangeStart', hideMenu)
  }, [hideMenu, router.events])

  useEffect(() => {
    if (router.asPath.includes(Space.AWELL_ORCHESTRATION)) {
      setSpace(Space.AWELL_ORCHESTRATION)
    } else if (router.asPath.includes(Space.AWELL_SCORE)) {
      setSpace(Space.AWELL_SCORE)
    } else if (router.asPath.includes(Space.AWELL_EXTENSIONS)) {
      setSpace(Space.AWELL_EXTENSIONS)
    } else if (router.asPath.includes(Space.AWELL_STUDIO)) {
      setSpace(Space.AWELL_STUDIO)
    } else if (router.asPath.includes(Space.AWELL_ONTOLOGY)) {
      setSpace(Space.AWELL_ONTOLOGY)
    } else {
      setSpace(null)
    }
  }, [router.asPath])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        space,
        isMobileSideMenuOpen,
        toggleMobileSideMenu,
        toggleMobileMainMenu,
        isMobileMainMenuOpen,
        tableOfContents: toc,
        setTableOfContents,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
