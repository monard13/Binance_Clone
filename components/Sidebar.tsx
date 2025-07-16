
import React from 'react';

interface SidebarProps {
    activeItem: string;
    setActiveItem: (id: string) => void;
}

const SidebarItem = ({ 
    icon, 
    label, 
    isActive, 
    onClick, 
    hasSubmenu = false 
}: { 
    icon: React.ReactNode; 
    label: string; 
    isActive: boolean; 
    onClick: () => void;
    hasSubmenu?: boolean;
}) => {
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-between p-3 mx-2 rounded cursor-pointer transition-all duration-200 ${
                isActive
                    ? 'bg-[#2b3139] text-[#fcd535]'
                    : 'hover:bg-[#2b3139] text-[#848e9c]'
            }`}
        >
            <div className="flex items-center">
                <div className="w-4 h-4 mr-3">{icon}</div>
                <span className="text-sm">{label}</span>
            </div>
            {hasSubmenu && (
                <svg className={`w-3 h-3 transition-transform ${isActive ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            )}
        </div>
    );
}

const Sidebar = ({ activeItem, setActiveItem }: SidebarProps) => {
    return (
        <aside className="w-64 bg-[#1e2329] border-r border-[#2b3139] min-h-screen pt-4">
            <SidebarItem
                icon={<div className="w-4 h-4 bg-[#848e9c] rounded"></div>}
                label="Dashboard"
                isActive={activeItem === 'dashboard'}
                onClick={() => setActiveItem('dashboard')}
            />
            
            <SidebarItem
                icon={<div className="w-4 h-4 bg-[#848e9c] rounded"></div>}
                label="Assets"
                isActive={activeItem === 'assets'}
                onClick={() => setActiveItem('assets')}
                hasSubmenu={true}
            />
            
            {activeItem === 'assets' && (
                <div className="ml-6 mt-1">
                    <div className="text-xs text-[#848e9c] px-3 py-1">Overview</div>
                    <SidebarItem
                        icon={<div className="w-3 h-3 bg-[#848e9c] rounded-full"></div>}
                        label="Spot"
                        isActive={activeItem === 'spot'}
                        onClick={() => setActiveItem('spot')}
                    />
                    <SidebarItem
                        icon={<div className="w-3 h-3 bg-[#848e9c] rounded-full"></div>}
                        label="Margin"
                        isActive={activeItem === 'margin'}
                        onClick={() => setActiveItem('margin')}
                    />
                    <SidebarItem
                        icon={<div className="w-3 h-3 bg-[#848e9c] rounded-full"></div>}
                        label="Funding"
                        isActive={activeItem === 'funding'}
                        onClick={() => setActiveItem('funding')}
                    />
                    <SidebarItem
                        icon={<div className="w-3 h-3 bg-[#848e9c] rounded-full"></div>}
                        label="Third-Party Wallet"
                        isActive={activeItem === 'third-party'}
                        onClick={() => setActiveItem('third-party')}
                    />
                </div>
            )}
            
            <SidebarItem
                icon={<div className="w-4 h-4 bg-[#848e9c] rounded"></div>}
                label="Orders"
                isActive={activeItem === 'orders'}
                onClick={() => setActiveItem('orders')}
                hasSubmenu={true}
            />
            
            <SidebarItem
                icon={<div className="w-4 h-4 bg-[#848e9c] rounded"></div>}
                label="Rewards Hub"
                isActive={activeItem === 'rewards'}
                onClick={() => setActiveItem('rewards')}
            />
            
            <SidebarItem
                icon={<div className="w-4 h-4 bg-[#848e9c] rounded"></div>}
                label="Referral"
                isActive={activeItem === 'referral'}
                onClick={() => setActiveItem('referral')}
            />
            
            <SidebarItem
                icon={<div className="w-4 h-4 bg-[#848e9c] rounded"></div>}
                label="Account"
                isActive={activeItem === 'account'}
                onClick={() => setActiveItem('account')}
                hasSubmenu={true}
            />
            
            <SidebarItem
                icon={<div className="w-4 h-4 bg-[#848e9c] rounded"></div>}
                label="Sub Accounts"
                isActive={activeItem === 'sub-accounts'}
                onClick={() => setActiveItem('sub-accounts')}
                hasSubmenu={true}
            />
            
            <SidebarItem
                icon={<div className="w-4 h-4 bg-[#848e9c] rounded"></div>}
                label="Settings"
                isActive={activeItem === 'settings'}
                onClick={() => setActiveItem('settings')}
            />
        </aside>
    );
}

export default Sidebar;
