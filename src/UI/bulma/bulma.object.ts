export class SidebarItem {
  text = ''
  url? = ''
  route? = ''
  children?: Array<SidebarItem> = []
  toggle = false
}
