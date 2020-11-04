import logo from './logo.svg';
import './App.css';
// html에서 body에 해당되는 내용은 App.js에 채우면 된다.
function App() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo"/>
      <h2>Let's develop management system!</h2>
    </div>
  );
}

export default App;
