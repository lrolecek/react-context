import './App.css'
import Cart from './componets/Cart'
import Header from './componets/Header'

import {SettingsContext} from './context/settings-context';
import {useState} from 'react';

function App() {
  const [settings, setSettings] = useState({
    currency: 'USD',
    mode: 'dark',
    cartItems: [
      {
        name: 'Pracka',
        price: 15290,
      },
      {
        name: 'Vysavac',
        price: 7900,
      },
      {
        name: 'Rychlovarna konvice',
        price: 734,
      },
      {
        name: 'Lampicka',
        price: 2900,
      },
    ]
  });

  const setCurrency = (newCurrency) => {
    setSettings({
      ...settings,
      currency: newCurrency
    });
  }

  return (
    <>
      <SettingsContext.Provider value={{
        ...settings,
        setCurrency
      }}>

        <Header />
        <Cart />

      </SettingsContext.Provider>
    </>
  )
}

export default App
