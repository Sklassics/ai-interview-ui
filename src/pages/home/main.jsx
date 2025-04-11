import { BrowserRouter, useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/features", element: <Features /> },
    { path: "/login", element: <Login /> },
  ]);
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

