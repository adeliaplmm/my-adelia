import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <nav className='navbar bg-gradient-to-r bg-indigo-600 via-indigo-400 via-violet-400 '>
      <div className='container flex ml-auto py-12'>
      <div className='w-3/12'>
        <div className='logo text-white uppercase font-semibold tracking-widest text-center text-3xl'>
          ADELIA
        </div>
      </div>
      <div className='nav flex font-semibold justify-center w-6/12 text-2xl text-white text-opacity-60  space-x-10'>
           <a href="#">Profile</a>
           <a href="#">Skill</a>
           <a href="#">Project</a>
           <a href="#">Contact</a>
      </div>
      <div className='w-3/12'>
        <div className='button flex text-lg font-semibold text-white space-x-5 '>
          <a href='#' className='border-yellow-400 border-2 rounded-full hover:opacity-70 justifty-center px-5'>Kontak</a>
        </div>
      </div>
      </div>
      <div>
        <div className='text-5xl my-12 mt-20 font-mono text-white text-center'>Saya seorang front-end engineer, back-end <br/>engineer, dan juga UI designer</div>
        <div className='mt-12 text-2xl text-white text-center opacity-50'>Sejak umur 17 tahun saya memulai programming. <br/> Dan baru-baru ini memulai UI design.</div>
      </div>
      <div className="text-center mt-10">
      <a href="#" className="border-yellow-400 bg-yellow-400 rounded-full border-2 hover:bg-yellow-400 hover:border-yellow-400 px-8 py-2 text-black font-semibold text-xl">Pelajari</a>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </nav>
  )
}
