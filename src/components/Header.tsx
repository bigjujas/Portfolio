const Header = () => {
    return (
        <header className="flex bg-black h-[7vh] justify-center items-center">
            <nav>
                <ul className="text-white flex text-[1.2rem] gap-25">
                    <li className="nav_a"><a href="">Home</a></li>
                    <li className="nav_a"><a href="">Stacks</a></li>
                    <li className="nav_a"><a href="">About me</a></li>
                    <li className="nav_a"><a href="">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
