import Loader from "./components/Loader"
import ProfileContent from "./components/ProfileContent"
import ProfileSidebar from "./components/ProfileSidebar"
import Menu from "./components/Menu"
import MenuDrawer from "./components/MenuDrawer"


const App = () => {


  return (
    <>
    <Loader />
    <MenuDrawer />
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
