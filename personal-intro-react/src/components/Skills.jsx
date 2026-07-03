import { useState } from 'react'
function Skills() {
  const items = ['前端开发', 'AI 使用', '英语', 'AI编程']
  const [clickedSkill, setClickedSkill] = useState(null)


  return (
    <section className="skills-section" aria-label="技能列表">
      <h2>专业技能</h2>
      <ul className="skills-list">
        {items.map(item => (
          <li key={item} onClick={() => setClickedSkill(item)}>{item}</li>
          ))}
      </ul>
      {clickedSkill && <p className="skill-tip">你点击了：{clickedSkill}</p>}

    </section>
  )
}

export default Skills
