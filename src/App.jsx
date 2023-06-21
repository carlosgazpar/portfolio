import Loader from "./components/Loader"
import ProfileContent from "./components/ProfileContent"
import ProfileSidebar from "./components/ProfileSidebar"
import Menu from "./components/Menu"


const App = () => {


  return (
    <>
    <Loader />
    <Menu />
    <main>
      <aside className="profile-container">
        <ProfileSidebar/>
      </aside>
      <div className="portfolio-container">
        <ProfileContent/>
      </div>
    </main>
    </>
  )
}

export default App
