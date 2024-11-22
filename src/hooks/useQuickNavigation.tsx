import { type QuickNavType } from '../types/menu.types'
import { FlattenedMenuType, useMenus } from './useMenus'

export const useQuickNavigation = (currentPageSlug: string): QuickNavType => {
  const { menus } = useMenus()

  const indexCurrentPage = menus.findIndex((menuItem) => {
    return menuItem.path ? menuItem.path.includes(currentPageSlug) : -1
  })
  const currentPage = menus.find((menuItem) => {
    return menuItem.path ? menuItem.path.includes(currentPageSlug) : -1
  })

  const generateLabel = (item: FlattenedMenuType): string => {
    if (currentPage?.parentTitle === item.parentTitle) {
      return item.title
    }
    return `${item.parentTitle} - ${item.title}`
  }

  if (indexCurrentPage === -1) return { prev: undefined, next: undefined }

  const prevItem = menus[indexCurrentPage - 1]
  const nextItem = menus[indexCurrentPage + 1]

  return {
    prev: prevItem && {
      label: generateLabel(prevItem),
      url: prevItem.path || '',
    },
    next: nextItem && {
      label: generateLabel(nextItem),
      url: nextItem.path || '',
    },
  }
}
