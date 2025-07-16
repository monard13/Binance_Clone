
import React from 'react';

const NavItem = ({ children }: { children: React.ReactNode }) => (
    <a href="#" className="text-[#eaecef] hover:text-[#fcd535] transition-colors text-sm font-medium px-3">
        {children}
    </a>
)

const Navbar = () => {
    return (
        <nav className="bg-[#1e2329] border-b border-[#2b3139] p-0 fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center h-16 px-6">
                <div className="flex items-center">
                    <div className="text-[#fcd535] text-xl font-bold mr-8">
                        <svg width="98" height="18" viewBox="0 0 98 18" fill="currentColor">
                            <path d="M10.8 0L18 7.2L10.8 14.4L7.2 10.8L10.8 7.2L7.2 3.6L10.8 0Z"/>
                            <path d="M0 7.2L3.6 3.6L7.2 7.2L3.6 10.8L0 7.2Z"/>
                            <path d="M14.4 7.2L18 3.6L21.6 7.2L18 10.8L14.4 7.2Z"/>
                            <text x="28" y="13" className="fill-current font-bold text-sm">BINANCE</text>
                        </svg>
                    </div>
                    <div className="flex items-center space-x-1">
                        <NavItem>Buy Crypto</NavItem>
                        <NavItem>Markets</NavItem>
                        <NavItem>Trade</NavItem>
                        <NavItem>Futures</NavItem>
                        <NavItem>Earn</NavItem>
                        <NavItem>Square</NavItem>
                        <NavItem>More</NavItem>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-[#fcd535] text-black px-4 py-2 rounded text-sm font-semibold hover:bg-[#e0b92d] transition-colors">
                        Deposit
                    </button>
                    <div className="w-8 h-8 bg-[#2b3139] rounded-full"></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
