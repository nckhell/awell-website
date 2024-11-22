import { BadgeColorType } from '../components/Badge/badge.types'

export type NavType = {
  label: string
  path: string
  external?: boolean
}

export type BadgeType = { label: string; color?: BadgeColorType }

interface BaseType {
  title: string
  path: string
  badge?: BadgeType
  openInNewTab?: boolean
}

export interface LevelThreeMenuType extends BaseType {
  submenu?: Array<BaseType>
}

export interface LevelTwoMenuType extends BaseType {
  submenu?: Array<LevelThreeMenuType>
}

export interface LevelOneMenuType extends BaseType {
  submenu?: Array<LevelTwoMenuType>
}

export type MenuType = LevelOneMenuType[]

export type QuickNavType = {
  prev?: QuickNavItemType
  next?: QuickNavItemType
}

export type QuickNavItemType = {
  label: string
  url: string
}