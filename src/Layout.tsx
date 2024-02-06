import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        <img src={'./assets/logo04.png'} className="logo" alt="Vite logo" />
      </div>
      <a>
        <h1>TEST PAGE</h1>
      </a>
      <Outlet />
    </>
  );
};

export default Layout;
