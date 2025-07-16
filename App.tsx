import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import UsdtModal from './components/UsdtModal';
import { SIDEBAR_ITEMS } from './constants';

const App = () => {
    const [activeItem, setActiveItem] = useState<string>(SIDEBAR_ITEMS[0].id);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <div className="bg-[#1a1a1a] text-[#e0e0e0] min-h-screen">
            <Navbar />
            <main className="pt-[60px] md:pt-[76px] lg:pt-[60px] flex flex-col md:flex-row max-w-[1400px] mx-auto">
                <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
                <Content onUsdtClick={handleOpenModal} />
            </main>
            <UsdtModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default App;