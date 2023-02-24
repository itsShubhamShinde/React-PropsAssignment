import './App.css';
import Cart from './Cart';


function App() {
  return (
    <div className="App">
      <Cart colorcode="#ff6563" name="Pink"/>
      <Cart colorcode="#333333" name="Gray"/>
      <Cart colorcode="#000000" name="Black"/>
      <Cart colorcode="#38bb15" name="Green"/>
      <Cart colorcode="#c90b0b" name="Red"/>
      <Cart colorcode="#ff7f00" name="Orange"/>
      <Cart colorcode="#fff500" name="Yellow"/>
      <Cart colorcode="#cccccc" name="Light-Gray"/>
      <Cart colorcode="#7e40a1" name="Purple"/>
      <Cart colorcode="#c14811" name="Brown"/>
    </div>
  );
}

export default App;
