import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Purchase from '@/components/Purchase'
import ClassificationPage from '@/components/ClassificationPage'
import Mine from '@/components/Mine'
import Language from '@/components/Language'
import Move from '@/components/Move'
import Front from '@/components/Front'
import Designer from '@/components/Designer'
import WorkSkill from '@/components/WorkSkill'
import TeacherTest from '@/components/TeacherTest'
import InterestLife from '@/components/InterestLife'
import Entry from '@/components/Entry'
Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
  {
    path: '/', redirect: '/HomePage',
    
  },
  {
    path: '/HomePage', redirect: '/HomePage/Language',
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
    children:[
      {
        path: '/HomePage/Language',
        name: 'Language',
        component: Language,
      },
      {
        path: '/HomePage/Move',
        name: 'Move',
        component: Move,
      },
      {
        path: '/HomePage/Front',
        name: 'Front',
        component: Front,
      },
      {
        path: '/HomePage/Designer',
        name: 'Designer',
        component: Designer,
      },
      {
        path: '/HomePage/WorkSkill',
        name: 'WorkSkill',
        component: WorkSkill,
      },
      {
        path: '/HomePage/TeacherTest',
        name: 'TeacherTest',
        component: TeacherTest,
      },
      {
        path: '/HomePage/InterestLife',
        name: 'InterestLife',
        component: InterestLife,
      }
    
    ]
  },
  {
    path: '/ClassificationPage',
    name: 'ClassificationPage',
    component: ClassificationPage
  },
  {
    path: '/Purchase',
    name: 'Purchase',
    component: Purchase
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/Entry',
    name: 'Entry',
    component: Entry
  }

  ]
})
router.beforeEach((to, from, next) => {//防止未登录就离开登录页面
  if(from.path=="/Entry"){
    let loca = window.localStorage;
    let user= loca.getItem("user");
    let myuser = JSON.parse(user);
    if(myuser.state){
      next();
    }else{
      alert("请先登录!");
    }
  }else{
    next();
  }

})

export default router;
