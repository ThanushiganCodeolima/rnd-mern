import './App.css'
import Content from './Components/Content'
import Footer from './Components/Footer';
import Header from './Components/Header'
function App() {
  const appName = `Codeolima Web App`
  const verion = process.env.VERSION;
  return (
    <>
    <Header appName={appName}/>
    <Content />
    <Footer verion={verion}/>
    </>
  );
}

export default App;
