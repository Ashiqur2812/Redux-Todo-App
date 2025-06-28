import { Outlet } from 'react-router';
import Navbar from './components/ui/layout/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
