import { Provider } from 'react-redux'
import './App.css'
import Home from './home/HomePage'
import { store } from './redux/store'

function App() {

  return (
    <>
    <Provider store={store}>
      <Home/>
    </Provider>
    </>
  )
}

export default App
