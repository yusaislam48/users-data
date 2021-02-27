import { useEffect, useState } from 'react';
import './App.css';
import PersonCart from './components/Person Cart/PersonCart';
import ShowData from './components/ShowData/ShowData';
import usersData from './usersData/data.json';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(usersData);
  }, [])
  const [cart, setCart] = useState([]);

  const handleAddPerson = (user) => {
    let item = cart.indexOf(user);
    if (item === -1) {
      const newCart = [...cart,  user];
      setCart(newCart);
    } else {
      alert("This Country Already Added!");
    }
  }

  return (
    <div className="App">
      <div className="personAdded">
        <PersonCart cart={cart}></PersonCart>
      </div>

      <div className="users">
        {
          user.map(user => <ShowData handleAddPerson={handleAddPerson} key={user.id} user ={user}></ShowData>)
        }
      </div>
      
    </div>
  );
}

export default App;
