import { isNil } from "lodash"

export const isMenuItemActive = (
  menuItemPath: string,
  pathName: string,
  slug?: string | string[]
) => {
  /** Active state for home page */
  if (menuItemPath === '/' && pathName !== '/') {
    return false
  }

  if (pathName === menuItemPath) return true

  if (!slug) return false

  /**
   * Returns 'welcome' if path is 'docs/getting-started/welcome'
   */
  const [parentSegment, childSegment] = menuItemPath.split('/').splice(-2)

  if (Array.isArray(slug)) {
    return (!isNil(parentSegment) && slug.includes(parentSegment)) && slug.includes(childSegment)
  }

  return slug.includes(childSegment)
}
