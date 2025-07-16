import React from 'react';
import { SidebarItemType } from '../types';
import { SIDEBAR_ITEMS } from '../constants';

interface SidebarProps {
    activeItem: string;
    setActiveItem: (id: string) => void;
}

const SidebarItem = ({ item, isActive, onClick }: { item: SidebarItemType; isActive: boolean; onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive
                    ? 'bg-[#fcd535] text-[#1a1a1a] font-semibold'
                    : 'hover:bg-[#3a3a3a]'
            }`}
        >
            {item.icon}
            <span className="editable-text flex-grow" contentEditable="true" suppressContentEditableWarning>{item.label}</span>
        </div>
    );
}

const Sidebar = ({ activeItem, setActiveItem }: SidebarProps) => {
    return (
        <aside className="w-full md:w-[250px] bg-[#2c2c2c] p-4 flex-shrink-0 shadow-lg md:shadow-none border-b md:border-b-0 md:border-r border-[#3a3a3a]">
            {SIDEBAR_ITEMS.map((item) => (
                <SidebarItem
                    key={item.id}
                    item={item}
                    isActive={activeItem === item.id}
                    onClick={() => setActiveItem(item.id)}
                />
            ))}
        </aside>
    );
}

export default Sidebar;
import React from 'react';
import { SIDEBAR_ITEMS } from '../constants';

const Sidebar = ({ activeItem, setActiveItem }: { 
    activeItem: string; 
    setActiveItem: (item: string) => void; 
}) => {
    return (
        <aside className="w-full md:w-64 bg-[#2c2c2c] min-h-screen">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4 text-[#fcd535]">Menú</h2>
                <nav>
                    {SIDEBAR_ITEMS.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            className={`w-full flex items-center p-3 mb-2 rounded-lg transition-colors duration-200 ${
                                activeItem === item.id 
                                    ? 'bg-[#fcd535] text-black' 
                                    : 'text-gray-300 hover:bg-[#3c3c3c] hover:text-white'
                            }`}
                        >
                            {item.icon}
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
