import Header from './components/Header'
import Avatar from './components/Avatar'
import Skills from './components/Skills'
import WorkTable from './components/WorkTable'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const workColumns = [
    { key: 'time', title: '时间' },
    { key: 'company', title: '公司' },
    { key: 'job', title: '职位' },
    { key: 'desc', title: '描述' },
  ]

  const workData = [
    { time: '2026.03 — 至今', company: '深圳绿洲科技有限公司', job: '前端开发工程师', desc: '负责公司 SaaS 平台核心模块重构，使用 React + TypeScript 开发，主导组件库建设与性能优化' },
    { time: '2023.07 — 2026.02', company: '杭州青云网络', job: 'Web 开发实习生 / 初级工程师', desc: '参与电商后台管理系统开发，负责订单模块与数据看板的前端实现，独立完成 3 个营销活动页面' },
    { time: '2022.06 — 2023.06', company: '自由职业 / 个人项目', job: '独立开发者', desc: '接外包项目 5+ 个，涵盖企业官网、小程序、活动落地页，同步学习 AI 工具链并应用于工作流' },
  ]

  const eduColumns = [
    { key: 'year', title: '年份' },
    { key: 'school', title: '学校' },
    { key: 'major', title: '专业' },
  ]
  const eduData = [
    { year: '2018', school: 'XX大学', major: '计算机科学' },
    { year: '2019', school: '北京大学', major: '化学'},
  ]
  
  

  return (
    <main className="container">
      <Header />
      <article className="content">
        <Avatar />
        <Skills />
        <WorkTable columns={workColumns} data={workData} />
        <WorkTable columns={eduColumns} data={eduData} />
        <ContactForm />
      </article>
      <Footer />
    </main>
  )
}

export default App
