import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
<Navbar title="Conversion" About="hi"/>
<div className="container my-3">
<TextForm heading="Enter The Text To Analyze"/>
</div>

    </>
  );
}
export default App;
