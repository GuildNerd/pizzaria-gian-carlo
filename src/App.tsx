import { PageHeader } from './components/PageHeader/PageHeader'
import { Home } from './components/Home'
import { Menu } from './components/PizzaMenu/Menu'
import { PageFooter } from './components/PageFooter'
import { useState, useEffect } from 'react'

function App(pageToShow?: string) {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    switch (pageToShow) {
      case "PizzaMenu":
        setCurrentPage('PizzaMenu');
        break;
      default:
        setCurrentPage('Home');
    }
  })

  function refreshCurrentPage() {
    switch (currentPage) {
      case('PizzaMenu'):
        return <Menu />
      default:
        return <Home />
    }
  }

  return (
    <div className="bg-brown-500 w-screen pb-12">
      <PageHeader></PageHeader>
      { refreshCurrentPage() }
      <PageFooter />
    </div>
  )
}

export default App
