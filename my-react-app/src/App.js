import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  let name = 'sesac';
  return (
    <div className="App">
      <MyHeader />
    <header className="App-header">   
      <h1>헬로우, 리액트</h1>
    </header>
    <h2>헤더2</h2>
    <p>본문 내용...Welcome to React-class</p>
      <MyFooter />
    </div>    
  );
}

export default App;
