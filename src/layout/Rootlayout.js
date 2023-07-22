import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Rootlayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
