import SideBar from './SideBar';

const Index = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <SideBar />
      <div className="ml-72 w-auto min-h-full">{children}</div>
    </div>
  );
};

function AppLayout({ children }) {
  return <Index>{children}</Index>;
}

export default AppLayout;
