import './App.css';
import Counter from './pages/Counter.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Layout from './Layout.tsx';
import Shopping from './pages/Shopping.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/counter'} element={<Counter />} />
          <Route path={'/shopping'} element={<Shopping />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
