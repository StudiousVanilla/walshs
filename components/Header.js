const Header = () => {
    return ( 
        <div className="w-screen bg-pubNavy">
            <nav className="navbar flex justify-evenly items-center p-2">

                <span className="text-xs sm:text-sm md:text-xl text font-pub text-textPrimary tracking-widest pub-shadow border-2 rounded-full border-textPrimary py-0.5 pr-1.5 pl-2 pub-box-shadow">6&7</span>
                <h1 className="text-xl sm:text-3xl md:text-4xl tracking-widest font-pub text-textPrimary pub-shadow">
                    J.WALSH & CO.
                </h1>
                <span className="text-xs sm:text-sm md:text-xl font-pub text-textPrimary tracking-widest pub-shadow border-2 rounded-full border-textPrimary py-0.5 pr-1.5 pl-2 pub-box-shadow">6&7</span>





                {/* <ul className="flex">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Virtual Tour</li>
                </ul> */}



            </nav>
        </div>
     );
}
 
export default Header;