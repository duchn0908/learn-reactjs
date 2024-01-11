import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Hoang Duc';
  const age = 18;
  const ismale = true;
  const student = {
    name: 'Easy Frontend'
  };
  const colorList = ['red', 'green', 'blue', 'yellow']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hoang Nguyen Duc
        </p>
        <p>Xin chao {name} - {age} {ismale ? 'Male' : 'Female'}</p>

        {ismale ? <p>Minh la nam</p> : <p>Minh la nu</p>}

        {ismale && <p>Minh la con trai</p>}
        {!ismale && <p>Minh la nu</p>}


        {ismale && (
          <div>
            <p>Minh la con trai</p>
            <p>Minh la con trai</p>
            <p>Minh la con trai</p>
          </div>)
        }
        {ismale && (
          <>
            <p>Minh la con trai 1</p>
            <p>Minh la con trai 2</p>
            <p>Minh la con trai 3</p>
          </>)
        }
        <p>{student.name}</p>
        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          )

          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
