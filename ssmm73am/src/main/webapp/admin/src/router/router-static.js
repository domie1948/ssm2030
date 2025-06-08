import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import zhuanyeleixing from '@/views/modules/zhuanyeleixing/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import shebeixinxi from '@/views/modules/shebeixinxi/list'
    import huodongxinxi from '@/views/modules/huodongxinxi/list'
    import guojihuiyi from '@/views/modules/guojihuiyi/list'
    import dianziqikan from '@/views/modules/dianziqikan/list'
    import forum from '@/views/modules/forum/list'
    import keyanchengguo from '@/views/modules/keyanchengguo/list'
    import shiyandongtai from '@/views/modules/shiyandongtai/list'
    import shiyanleixing from '@/views/modules/shiyanleixing/list'
    import xueshutuandui from '@/views/modules/xueshutuandui/list'
    import jiangxiangxinxi from '@/views/modules/jiangxiangxinxi/list'
    import discussdianziqikan from '@/views/modules/discussdianziqikan/list'
    import config from '@/views/modules/config/list'
    import keyanbaogao from '@/views/modules/keyanbaogao/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公示信息',
        component: news
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/zhuanyeleixing',
        name: '专业类型',
        component: zhuanyeleixing
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/shebeixinxi',
        name: '设备信息',
        component: shebeixinxi
      }
      ,{
	path: '/huodongxinxi',
        name: '活动信息',
        component: huodongxinxi
      }
      ,{
	path: '/guojihuiyi',
        name: '国际会议',
        component: guojihuiyi
      }
      ,{
	path: '/dianziqikan',
        name: '电子期刊',
        component: dianziqikan
      }
      ,{
	path: '/forum',
        name: '学术交流',
        component: forum
      }
      ,{
	path: '/keyanchengguo',
        name: '科研成果',
        component: keyanchengguo
      }
      ,{
	path: '/shiyandongtai',
        name: '实验动态',
        component: shiyandongtai
      }
      ,{
	path: '/shiyanleixing',
        name: '实验类型',
        component: shiyanleixing
      }
      ,{
	path: '/xueshutuandui',
        name: '学术团队',
        component: xueshutuandui
      }
      ,{
	path: '/jiangxiangxinxi',
        name: '奖项信息',
        component: jiangxiangxinxi
      }
      ,{
	path: '/discussdianziqikan',
        name: '电子期刊评论',
        component: discussdianziqikan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/keyanbaogao',
        name: '科研报告',
        component: keyanbaogao
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
