import GithubUsers from "../components/github_users/GithubUsers";
import NavBar from "../components/nav_bar/NavBar";
import SearchBar from "../components/search_bar/SearchBar";

import "./Home.css";

const Home = () => {
  
  return (
    <div className="home-container">
      <div className="home-nav">
        <NavBar />
      </div>
      <div className="home-body">
        <SearchBar />
        <GithubUsers />
      </div>
      
    </div>
  )
}

export default Home