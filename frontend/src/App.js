import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/RootLayout';
import Feed from './layouts/FeedLayout';
import Landing from './layouts/LandingLayout';
import Planner from './layouts/Planner';
import GroceryList from './layouts/GroceryList';
import Recipe from './layouts/RecipeLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Landing />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/planner' element={<Planner />} />
          <Route path='/grocery-list' element={<GroceryList />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
