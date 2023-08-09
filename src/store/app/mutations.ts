import { MutationTree } from 'vuex/types'
import { AppState } from '@/types/store/app/AppState'
const mutations: MutationTree<AppState> = {
  updateCount1(
    state: AppState,
    payload: {
      count1: number
    }
  ) {
    state.count1 = payload.count1
  },
  updateCount2(
    state: AppState,
    payload: {
      count2: number
    }
  ) {
    state.count2 = payload.count2
  },
  updateHeaderText(
    state: AppState,
    payload: {
      headerText: string
    }
  ) {
    state.headerText = payload.headerText
  },
}

export default mutations
