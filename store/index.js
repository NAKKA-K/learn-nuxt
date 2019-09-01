import Vuex from 'vuex'

export const state = () => ({
  isLoding: false
})

export const mutations = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  }
}
