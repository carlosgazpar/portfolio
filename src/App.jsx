import Loader from "./components/Loader"
import ProfileContent from "./components/ProfileContent"
import ProfileSidebar from "./components/ProfileSidebar"


const App = () => {


  return (
    <>
    <Loader />
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
