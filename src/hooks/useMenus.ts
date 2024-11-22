import {
  extensionsApiMenu,
  extensionsDeveloperToolsMenu,
  extensionsDocsMenu,
} from '@/config/menus/awell-extensions'
import { ontologyDocsMenu } from '@/config/menus/awell-ontology'
import {
  orchestrationApiMenu,
  orchestrationDeveloperToolsMenu,
  orchestrationDocsMenu,
} from '@/config/menus/awell-orchestration'
import { scoreDocsMenu } from '@/config/menus/awell-score'
import { studioDocsMenu } from '@/config/menus/awell-studio'
import { BadgeType } from '@/types/menu.types'

export interface FlattenedMenuType {
  title: string
  path?: string
  parentTitle?: string
  openInNewTab?: boolean
  badge?: BadgeType
}

interface useMenusHook {
  menus: FlattenedMenuType[]
}

export const useMenus = (): useMenusHook => {
  const menus = [
    ...ontologyDocsMenu,
    ...studioDocsMenu,
    ...orchestrationDocsMenu,
    ...orchestrationApiMenu,
    ...orchestrationDeveloperToolsMenu,
    ...extensionsDocsMenu,
    ...extensionsApiMenu,
    ...extensionsDeveloperToolsMenu,
    ...scoreDocsMenu,
  ]

  /**
   * This is really ugly code, I am sorry.
   * Needs a clean up.
   */
  const flattenedMenu: FlattenedMenuType[] = menus
    .flatMap((menuItem) => {
      if (menuItem.submenu) {
        return menuItem.submenu.map((subMenuItem) => {
          return {
            parentTitle: menuItem.title,
            ...subMenuItem,
          }
        })
      }

      return [menuItem]
    })
    .flatMap((menuItem) => {
      if (menuItem?.submenu) {
        return menuItem.submenu.map((subMenuItem) => {
          return {
            parentTitle: menuItem.title,
            ...subMenuItem,
          }
        })
      }
      return [menuItem]
    })
    .flatMap((menuItem) => {
      if (menuItem?.submenu) {
        return menuItem.submenu.map((subMenuItem) => {
          return {
            parentTitle: menuItem.title,
            ...subMenuItem,
          }
        })
      }
      return [menuItem]
    })

  return { menus: flattenedMenu }
}
