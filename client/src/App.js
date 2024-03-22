import './App.css'
import Content from './Components/Content'
import Footer from './Components/Footer';
import Header from './Components/Header'
function App() {
  const appName = `Codeolima`
  const verion = `1.0.0`
  return (
    <>
    <Header appName={appName}/>
    <Content />
    <Footer verion={verion}/>
    </>
  );
}

export default App;
