import './App.css'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'
function App() {
  const appName = 'Codeolima Web App'
  const verion = process.env.REACT_APP_VERSION;
  return (
    <div>
    <Header appName={appName}/>
    <Content />
    <Footer verion={verion}/>

  );
}

export default App;
