export const state = () => ({
  activeJoinTab: 0,
})

export const mutations = {
  activeJoinTabSet(state, index) {
    state.activeJoinTab = index
  }
}
