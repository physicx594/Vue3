import userIcon from '@/assets/header/user.png'
import cartIcon from '@/assets/header/shoppingCart.png'

export type NavigationItem = {
  id: number
  name: string
  icon: string
  path: string
}

export const navigationList: NavigationItem[] = [
  { id: 0, name: '首頁', icon: '', path: '/' },
  { id: 1, name: '產品列表', icon: '', path: '/products' },
  { id: 2, name: '關於我們', icon: '', path: '/about' },
  { id: 3, name: '', icon: userIcon, path: '' },
  { id: 4, name: '', icon: cartIcon, path: '' }
]
