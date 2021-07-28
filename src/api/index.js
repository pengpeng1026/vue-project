import Ajax from "@/utils/request";
import MockAjax from '@/utils/mockRequest'
// 请求三级分类列表数据
export const reqCategoryList = () => {
  return Ajax({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
} 
// 请求banner数据
// mock请求全部都是get请求
export const reqBannerList = () => {
  return MockAjax({
    url:'/banner',
    method:'get'
  })
}
// 请求floor数据
export const reqFloorList = () => {
  return MockAjax({
    url:'/floor',
    method:'get'
  })
}
// 请求搜索页面数据
export const reqGoodsListInfo = (searchInfo) => {
  return Ajax({
    url:'/list',
    method:'post',
    data:searchInfo
  })
}
// reqGoodsListInfo({
//   name:'ruoya',
//   age:19
// })