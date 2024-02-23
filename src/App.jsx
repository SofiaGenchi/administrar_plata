import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransationForm from './components/TransationForm'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransationForm />
      <h1>hello</h1>
    </GlobalProvider>
  )
}

export default App