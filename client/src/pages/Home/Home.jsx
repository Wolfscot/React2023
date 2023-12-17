


import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        
        <h1 className="home-title">Търсете по тип място за настаняване</h1>
        <p className="home-desc">Най-популярните избори за пътуващи от България</p>
        <PropertyList />
        <h1 className="home-title">Домове, които гостите много харесват</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
