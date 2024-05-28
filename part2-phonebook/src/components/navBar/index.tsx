import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="flex bg-blue-100 gap-4">
        <div>
            <Link to="/" className="underline">
                Home
            </Link>
        </div>
        <div>
            <Link to="/counter" className="underline">
                Counter
            </Link>
        </div>
        <div>
            <Link to="/todo" className="underline">
                TodoList
            </Link>
        </div>
    </nav>
);

export default NavBar;
