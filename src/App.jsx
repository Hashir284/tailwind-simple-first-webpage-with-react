import './App.css'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
function App() {
  return (
    <div className="App">
       <div className="container m-auto px-10 p-12">
          <Section1 />
          <Section2 />
         </div>
    </div>
  );
}

export default App;
