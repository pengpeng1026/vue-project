// 模拟请求数据
import banner from './banner'
import floor from './floor'
import Mock from 'mockjs'
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})