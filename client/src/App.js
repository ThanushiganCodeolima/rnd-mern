import './index.css'
import Content from './Components/Content'
import Footer from './Components/Footer';
import Header from './Components/Header'
import LifecycleA from './Components/LifecycleA';
import Navbar from './Components/Navbar';
function App() {
  const appName = `Codeolima Web App`
  const verion = process.env.VERSION;
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Content />
      </div>
      {/*<Header appName={appName}/>
      <Footer verion={verion}/>
      <LifecycleA />*/}
    </div>
  );
}

export default App;
