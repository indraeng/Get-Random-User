import './App.css';
import UserCard from './components/UserCard';
import { useEffect, useState } from 'react';
import { getRandomUser } from './api';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getRandomUser().then((data) => {
      setUserData(data.results[0]);
      // console.log(data);
    })
  }, []);

  // console.log(getRandomUser());

  const refresh = () => {
    getRandomUser().then((data) => {
      setUserData(data.results[0]);
    })
  }

  return (
    <div className="App">
      <h1>This is a random user card</h1>
      {userData && <UserCard data={userData} />}
      <button onClick={refresh} className='refresh-btn' >Refresh</button>
    </div>
  );
}

export default App;
