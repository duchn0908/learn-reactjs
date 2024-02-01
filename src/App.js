import logo from './logo.svg';
import './App.css'
import Nav from './view/Nav';
const App = () => {
  let name = 'Duc';
  let number = 2021;
  let obj = { channel: 'Hoi dan IT', name: 'Hoang' };
  let link = 'https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=10'
  return (
    <div className='App'>
      <Nav />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1> Hello  world with React and {name} in {obj.name}  </h1>
        <a href={link} target='_blank'>Visit my chanel </a>
        <p>{JSON.stringify(obj)}</p>

      </header>
    </div>
  )
}
export default App;