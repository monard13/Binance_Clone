
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
                        <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Diamond icon */}
                            <g transform="translate(0, 8)">
                                <path d="M8 0L16 8L8 16L0 8L8 0Z" fill="#F0B90B"/>
                                <path d="M4 4L8 0L12 4L8 8L4 4Z" fill="#F0B90B"/>
                                <path d="M0 8L4 4L8 8L4 12L0 8Z" fill="#F0B90B"/>
                                <path d="M8 8L12 4L16 8L12 12L8 8Z" fill="#F0B90B"/>
                                <path d="M4 12L8 8L12 12L8 16L4 12Z" fill="#F0B90B"/>
                            </g>
                            {/* BINANCE text */}
                            <g transform="translate(24, 0)">
                                <path d="M0 8h4.8c2.4 0 4.2.6 5.4 1.8s1.8 2.8 1.8 4.8c0 1.4-.4 2.6-1.2 3.6s-1.8 1.6-3 2v.2c1.6.2 2.8.8 3.6 1.8s1.2 2.2 1.2 3.6c0 2.2-.7 3.9-2.1 5.1s-3.3 1.8-5.7 1.8H0V8zm4 7.2h2.4c1 0 1.8-.2 2.4-.6s.9-1 .9-1.8-.3-1.4-.9-1.8-1.4-.6-2.4-.6H4v4.8zm0 8h3c1.2 0 2.1-.3 2.7-.9s.9-1.4.9-2.4-.3-1.8-.9-2.4-1.5-.9-2.7-.9H4v6.6z" fill="#F0B90B"/>
                                <path d="M19.2 8h4v24h-4V8z" fill="#F0B90B"/>
                                <path d="M29.6 8h4.8l8.4 15.6V8h4v24h-4.8L33.6 16.4V32h-4V8z" fill="#F0B90B"/>
                                <path d="M56.8 8h4.8l7.2 24h-4.4l-1.2-4.4h-7.6l-1.2 4.4h-4.4L56.8 8zm2.4 6.4l-2.8 10h5.6l-2.8-10z" fill="#F0B90B"/>
                                <path d="M74.4 8h4.8l8.4 15.6V8h4v24h-4.8L78.4 16.4V32h-4V8z" fill="#F0B90B"/>
                                <path d="M102.4 8.8c1.8.6 3.2 1.5 4.2 2.7s1.5 2.6 1.5 4.1c0 2.2-.8 4-2.4 5.4s-3.7 2.1-6.3 2.1h-3.6V32h-4V8h7.6c1.2 0 2.3.3 3 .8zm-3 11.2c1.4 0 2.5-.3 3.3-.9s1.2-1.4 1.2-2.4-.4-1.8-1.2-2.4-1.9-.9-3.3-.9h-3.6v6.6h3.6z" fill="#F0B90B"/>
                                <path d="M115.2 8h16v3.6h-12v5.2h11.2v3.6h-11.2v5.6h12.4V32h-16.4V8z" fill="#F0B90B"/>
                            </g>
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
