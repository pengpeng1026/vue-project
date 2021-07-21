import { reqBannerList, reqCategoryList, reqFloorList } from "@/api"
const state = {
  catogoryList :[],
  bannerList:[],
  floorList:[]
}
const mutations = {
  RECIVE_CATOGORYLIST(state,catogoryList){
    state.catogoryList = catogoryList
  },
  RECEIVE_BANNERLIST(state,bannerList){
    state.bannerList = bannerList
  },
  RECEIVE_FLOORLIST(state,floorList){
    state.floorList = floorList
  }
}
const actions = {
  async getCatogoryList({commit}){
    const result = await reqCategoryList()
    if(result.code === 200){
      commit('RECIVE_CATOGORYLIST',result.data)
    }
  },
  async getBannerList({commit}){
    const result = await reqBannerList()
    if(result.code === 200){
      commit('RECEIVE_BANNERLIST',result.data)
    }
  },
  async getFloorList({commit}){
    const result = await reqFloorList()
    if(result.code === 200){
      commit('RECEIVE_FLOORLIST',result.data)
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