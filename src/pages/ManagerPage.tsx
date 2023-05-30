import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from '../app/store';
import ManagerNavbar from '../layout/ManagerNavbar';
import ManagerLoginModal from '../modals/ManagerLoginModal';

function ManagerPage() {
  const { isAuthenticated } = useSelector((state: RootState) => state.manager);

  if (!isAuthenticated) {
    return (
      <>
        <ManagerLoginModal />
        <img
          className="-z-10 h-screen w-full object-cover"
          src="https://i.shgcdn.com/39e62f8f-e1a5-45e7-a573-91b95a8e0425/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
        />
      </>
    );
  }

  return (
    <>
      <ManagerNavbar />
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
}

export default ManagerPage;