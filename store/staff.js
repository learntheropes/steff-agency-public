import findIndex from 'lodash.findindex'

export const state = () => ({
  init: false,
  list: [],
  bookmarks: [],
  one: {}
})

export const mutations = {
  setInit(store, value) {
    store.init = value
  },
  setStaff(store, data) {
    store.list = data
  },
  setOne(store, data) {
    store.one = data
  },
  setBookmarks(store, value) {
    const index = findIndex(store.bookmarks, { slug: value.slug })
    if (index === -1) store.bookmarks.push(value)
    else store.bookmarks.splice(index,1)
  }
}