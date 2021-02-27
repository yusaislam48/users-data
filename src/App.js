import { useEffect, useState } from 'react';
import './App.css';
import ShowData from './components/ShowData/ShowData';
import usersData from './usersData/data.json';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(usersData);
  }, [])

  return (
    <div className="App">
      {
        user.map(user => <ShowData key={user.id} user ={user}></ShowData>)
      }
    </div>
  );
}

export default App;
