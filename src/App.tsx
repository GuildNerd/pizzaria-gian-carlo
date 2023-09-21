import { PageHeader } from './components/PageHeader/PageHeader'
import { Home } from './components/Home'
import { PageFooter } from './components/PageFooter'

function App() {
  return (
    <div className="bg-brown-500 w-screen">
      <PageHeader />
      <Home />
      <PageFooter />
    </div>
  )
}

export default App
