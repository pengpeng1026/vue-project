import { reqCategoryList } from "@/api"
const state = {
  catogoryList :[]
}
const mutations = {
  RECIVE_CATOGORYLIST(state,catogoryList){
    state.catogoryList = catogoryList
  }
}
const actions = {
  async getCatogoryList({commit}){
    const result = await reqCategoryList()
    if(result.code === 200){
      commit('RECIVE_CATOGORYLIST',result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}