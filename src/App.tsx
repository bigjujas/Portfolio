import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header />
    <section className='h-[60vh] border-b-5 border-primary bg-gradient-to-t from-lime-900 via-neutral-900 to-zinc-900 flex flex-col items-center'>
      <div className='text-left mt-[20vh] flex flex-col gap-1'>
      <h2 className='text-white font-normal text-5xl'>Front-end Developer</h2>
      <h1 className='text-8xl font-[450] bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent'>João Pedro Silva</h1>
      <p className='text-2xl font-light text-white'>&lt;Welcome! /&gt;</p>
      </div>
    </section>
    </>
  )
}

export default App
