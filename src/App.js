import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
// styles
import './App.css'
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {

  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar></Navbar>
        <ThemeSelector></ThemeSelector>
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/search' element={<Search></Search>}> </Route>
          <Route path='/recipes/:id' element={<Recipe></Recipe>}> </Route>
          <Route path='/create' element={<Create></Create>}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App
