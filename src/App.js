import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';

function App() {
  return (
    <div className='bg-deepPurple min-h-screen p-4'>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>

    </div>

    
  );
}

export default App;
