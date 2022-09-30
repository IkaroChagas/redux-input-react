import * as C from './App.Styles'
import { Local } from './components/InputLocal';
import { Global } from './components/InputGlobal';
import reduxlogo from './images/redux.png'

function App() {

  return (
    <C.Container>
      <C.Header><img src={reduxlogo} /></C.Header>
      <Local />
      <Global />
    </C.Container>
  );
}

export default App;


