import './App.css';
import { images } from './db/images';
import { Home, Task } from './pages/index.js';
import { useBrowser } from './context/browser-context.js';
import { useEffect } from 'react';

const index = Math.floor(Math.random() * images.length);
const bgImage = images[index].image;

function App() {

  const {name, browserDispatch} = useBrowser();

  useEffect(() => {
    const userName = localStorage.getItem("name");
    browserDispatch({
      type: "NAME",
      payload: userName
    });
  }, [])

  return (
    <div className="app" style={{backgroundImage: `url("${bgImage}")`}}>
      {
        name ? <Task /> : <Home />
      }
    </div>
  );
}

export default App;
