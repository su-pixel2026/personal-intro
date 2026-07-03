import { useState } from 'react'
function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section className="contact-section" aria-label="联系表单">
      <h2>联系我</h2>
      <form className="contact-form" onSubmit={e => {
        e.preventDefault()
        if (name && email && message) {
          alert('感谢您的留言，' + name + '！')
          setName('')
          setEmail('')
          setMessage('')
        }
      }}>
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="请输入您的姓名" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">邮箱</label>
          <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@mail.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">留言</label>
          <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="请输入您的留言内容" required></textarea>
        </div>
        <button type="submit" className="btn-submit">发送</button>
      </form>
    </section>
  )
}

export default ContactForm
