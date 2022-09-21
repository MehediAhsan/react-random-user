import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';

function App() {
  return (
    <div className='bg-gray-700'>
      <Header></Header>
      <Users></Users>
    </div>
  );
}

export default App;
