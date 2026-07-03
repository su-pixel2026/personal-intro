function WorkTable() {
  const records = [
    { time: '2026.03 — 至今', company: '深圳绿洲科技有限公司', job: '前端开发工程师', desc: '负责公司 SaaS 平台核心模块重构，使用 React + TypeScript 开发，主导组件库建设与性能优化' },
    { time: '2023.07 — 2026.02', company: '杭州青云网络', job: 'Web 开发实习生 / 初级工程师', desc: '参与电商后台管理系统开发，负责订单模块与数据看板的前端实现，独立完成 3 个营销活动页面' },
    { time: '2022.06 — 2023.06', company: '自由职业 / 个人项目', job: '独立开发者', desc: '接外包项目 5+ 个，涵盖企业官网、小程序、活动落地页，同步学习 AI 工具链并应用于工作流' },
  ]

  return (
    <table className="work-table">
      <thead>
        <tr>
          <th>时间</th>
          <th>公司</th>
          <th>职位</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        {records.map((row, i) => (
          <tr key={i}>
            <td>{row.time}</td>
            <td>{row.company}</td>
            <td>{row.job}</td>
            <td>{row.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default WorkTable
