import { ActionTree } from 'vuex/types'
import { AppState } from '@/types/store/app/AppState'

const actions: ActionTree<AppState, any> = {
  count1Up({ commit, state }, payload: number) {
    const newState = Object.assign({}, state)
    newState.count1 = state.count1 + payload
    commit('updateCount1', newState)
  },
  count2Up({ commit, state }, payload: number) {
    const newState = Object.assign({}, state)
    newState.count2 = state.count2 + payload
    commit('updateCount2', newState)
  },
  changeHeaderText({ commit, state }, payload: string) {
    const newState = Object.assign({}, state)
    newState.headerText = payload
    commit('updateHeaderText', newState)
  },
}

export default actions
