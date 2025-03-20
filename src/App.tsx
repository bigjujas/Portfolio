import './App.css'
import Header from './components/Header'
import Stacks from './components/Stacks'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <>
    <Header />
    <section className='spacer layer1 h-[60vh] bg-gradient-to-t from-neutral-800 via-neutral-900 to-zinc-900 flex flex-col items-center'>
      <div className='home_text text-left m-auto flex flex-col gap-1 saturate-120'>
      <h2 className='text-white font-medium text-4xl'>João Pedro Silva</h2>
      <h1 className='text-8xl font-semibold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent'>Front-end Developer</h1>
      <p className='text-1xl font-normal text-white'>&lt;Welcome!/&gt;</p>
      </div>
    </section>
    <Stacks />
    <AboutMe />
    </>
  )
}

export default App
