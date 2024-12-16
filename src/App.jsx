import AppButton from "./components/AppButton"
import AppContent from "./components/AppContent"
import AppHeader from "./components/AppHeader"


function App() {


  return (
    <>
      <AppHeader />
      <div className="container raw d-flex gap-5">
        <AppButton />
      </div>

      <AppContent />
    </>
  )
}

export default App
