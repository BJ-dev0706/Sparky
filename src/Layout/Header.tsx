import Navbar from "../contains/NavBar";

const Header: React.FC = () => {

    return(
    <div className="fixed top-0 left-0 right-0 z-[1001] flex items-center justify-center py-5">
        <Navbar />
    </div>
  )
}

export default Header;