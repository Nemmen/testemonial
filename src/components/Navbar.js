import React from "react";

const Navbar = () => {
    return(
        <div className="bg-violet-100">
            <nav className="w-100">
                <div className="flex justify-around ">
                    <h2 className=" font-Bold text-2xl">Aryan_<span className="text-violet-400" >Nemmen</span></h2>
                    <div>
                        <ul className="flex justify-end gap-5 text-2xl">
                            <li>testemonial</li>
                            <li>About</li>
                            <li>Next</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar