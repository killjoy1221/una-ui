import type { Preset, StaticShortcutMap } from '@unocss/core'
import { link } from './link'
import { navLinkGroup } from './nav-link-group'
import { navLink } from './nav-link'
import { icon } from './icon'
import { accordion } from './accordion'
import { btn } from './btn'
import { formGroup } from './form-group'
import { input } from './input'
import { general } from './general'
import { _switch } from './switch'
import { alert } from './alert'
import { badge } from './badge'
import { avatar } from './avatar'
import { avatarGroup } from './avatar-group'
import { indicator } from './indicator'
import { kbd } from './kbd'
import { radio } from './radio'
import { checkbox } from './checkbox'
import { slider } from './slider'
import { progress } from './progress'
import { skeleton } from './skeleton'
import { tabs } from './tabs'
import { select } from './select'
import { separator } from './separator'
import { card } from './card'
import { table } from './table'
import { breadcrumb } from './breadcrumb'
import { dropdowMenu } from './dropdown-menu'
import { label } from './label'
import { popover } from './popover'
import { tooltip } from './tooltip'

export const shortcuts = [
  ...general,
  ...breadcrumb,
  ...accordion,
  ...btn,
  ...formGroup,
  ...input,
  ...icon,
  ..._switch,
  ...alert,
  ...badge,
  ...avatarGroup,
  ...avatar,
  ...indicator,
  ...kbd,
  ...navLink,
  ...navLinkGroup,
  ...link,
  ...radio,
  ...checkbox,
  ...slider,
  ...progress,
  ...skeleton,
  ...tabs,
  ...select,
  ...separator,
  ...card,
  ...table,
  ...dropdowMenu,
  ...label,
  ...popover,
  ...tooltip,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
