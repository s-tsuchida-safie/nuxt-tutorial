import { GetterTree } from 'vuex/types'
import { AppState } from '@/types/store/app/AppState'

const getter: GetterTree<AppState, any> = {
  count1(state: AppState): number {
    return state.count1
  },
  count2(state: AppState): number {
    return state.count2
  },
  headerText(state: AppState): string {
    return state.headerText
  },
}

export default getter
