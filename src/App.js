import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className='bg-deepPurple min-h-screen p-4'>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>

    </div>

    
  );
}

export default App;
