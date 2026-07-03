import { useState, useEffect } from 'react'
function Skills() {
  const items = ['前端开发', 'AI 使用', '英语', 'AI编程']
  const [clickedSkill, setClickedSkill] = useState(null)
  const [quote, setQuote] = useState('')
  useEffect(() => {
    const quotes = [
      '代码是写给人看的，顺便给机器运行。',
      'Stay hungry, stay foolish.',
      '简单是复杂的最高境界。',
      '编程不是打字，是思考。',
    ]
    const random = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(random)
  }, [])

  return (

    < section className="skills-section" aria-label= "技能列表" >
    <h2>专业技能</h2>
    <ul className="skills-list">
      {items.map(item => (
        <li key={item} onClick={() => setClickedSkill(item)}>{item}</li>
      ))}
    </ul>
      { quote && <p className="skill-tip">"{quote}"</p> }
  { clickedSkill && <p className="skill-tip">你点击了：{clickedSkill}</p> }

    </section >
  )
}

export default Skills
