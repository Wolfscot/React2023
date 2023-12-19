

import RouterPath from './paths';

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/games/:gameId" element={<GameDetails />} />

        <Route element={<AuthGuard />}>
          <Route path="/games/create" element={<GameCreate />} />
          <Route path={Path.GameEdit} element={<GameEdit />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
