import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Header calls Navigation */}
      <Header />
      <main className="mx-3">
        {/* Outlet is for client-side routing links */}
        <Outlet />
      </main>
      {/* Footer has profile links */}
      <Footer />
    </>
  );
}
export default App;
