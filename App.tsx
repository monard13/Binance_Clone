
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import UsdtModal from './components/UsdtModal';
import { SIDEBAR_ITEMS } from './constants';

const App = () => {
    const [activeItem, setActiveItem] = useState<string>('spot');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <div className="bg-[#181a20] text-white min-h-screen">
            <Navbar />
            <main className="pt-16 flex">
                <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
                <Content onUsdtClick={handleOpenModal} />
            </main>
            <UsdtModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default App;
