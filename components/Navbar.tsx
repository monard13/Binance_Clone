import React from 'react';

const NavItem = ({ children }: { children: React.ReactNode }) => (
    <a href="#" className="editable-text text-white hover:text-[#fcd535] transition-colors duration-200" contentEditable="true" suppressContentEditableWarning>
        {children}
    </a>
)

const Navbar = () => {
    return (
        <nav className="bg-[#2c2c2c] p-2.5 fixed top-0 left-0 w-full z-50 shadow-lg">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-[#fcd535] text-2xl font-bold mb-2 md:mb-0">BINANCE</div>
                <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-sm">
                    <NavItem>Comprar Cripto</NavItem>
                    <NavItem>Mercados</NavItem>
                    <NavItem>Trade</NavItem>
                    <NavItem>Futuros</NavItem>
                    <NavItem>Earn</NavItem>
                    <NavItem>Square</NavItem>
                    <NavItem>Más</NavItem>
                </div>
                <div className="mt-2 md:mt-0">
                    <button className="bg-[#fcd535] text-black px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-[#e0b92d] transition-colors duration-200 editable-text" contentEditable="true" suppressContentEditableWarning>
                        Depositar
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;