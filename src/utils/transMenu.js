
import store from '../store'
import { validatenull } from './validate'

export const initMenu = (router, menu) => {
  if (menu.length === 0) {
    return null
  }
  const menus = formatRoutes(menu)
  router.addRoutes(menus)
  store.commit('ADD_ROUTERS', menus)
}

export const formatRoutes = (aMenu) => {
  const aRouter = []
  aMenu.forEach(oMenu => {
    const {
      currentNode,
      nextNode
    } = oMenu
    const oRouter = {
      path: currentNode.url,
      component: currentNode.url,
      redirect: '/portal',
      name: currentNode.name,
      meta: {
        title: currentNode.name
      }
    }
    if (!validatenull(nextNode)) {
      oRouter.children = formatRoutes(nextNode)
    }
    aRouter.push(oRouter)
  })
  return aRouter
}
