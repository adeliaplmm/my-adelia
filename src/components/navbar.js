import Logo from './Logo';
import Nav from './NavItem';
import Button from './BtnItems';


export default function App() {
    return (
      <div className='container flex ml-auto py-12'>
        <div className='w-3/12'>
            <Logo/>
          </div>
          <div className='w-6/12'>
            <Nav/>
          </div>
          <div className='w-3/12'>
            <Button/>
          </div>
      </div>

    );
  }