import RoutesController from "./routes"
import Navigation from "./components/header/Navigation"

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <RoutesController />
    </>
  )
}

export default App
