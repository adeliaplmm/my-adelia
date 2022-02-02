import Button from './BtnItems';
import Navbar from './Navbar';

function HeroSection(){
    return(
        <div className='bg-gradient-to-r bg-indigo-600 via-indigo-400 to-violet-400'>
        <div className='container mx-auto>'>
            <Navbar/> 
        <div className='text-center text-white mt-16 w-8/12 mx-auto'> 
          <div className='text-5xl my-12 mt-20 font-mono text-white text-center'>Saya seorang front-end engineer, back-end <br/>engineer, dan juga UI designer</div>
        <p></p>
        </div> 
        </div>
        </div>
        
    );
}

export default HeroSection;