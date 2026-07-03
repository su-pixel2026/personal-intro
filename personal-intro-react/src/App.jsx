import Header from './components/Header'
import Avatar from './components/Avatar'
import Skills from './components/Skills'
import WorkTable from './components/WorkTable'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <main className="container">
      <Header />
      <article className="content">
        <Avatar />
        <Skills />
        <WorkTable />
        <ContactForm />
      </article>
      <Footer />
    </main>
  )
}

export default App
