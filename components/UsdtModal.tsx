import React, { useEffect, useCallback } from 'react';

interface UsdtModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCard = ({ children, title }: { children: React.ReactNode; title: string }) => (
    <div className="bg-[#3a3a3a] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 editable-text" contentEditable="true" suppressContentEditableWarning>{title}</h3>
        {children}
    </div>
)

const AssetDistributionRow = ({ label, value }: { label: string; value: string }) => (
     <div className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0 text-sm">
        <span className="text-gray-300 editable-text" contentEditable="true" suppressContentEditableWarning>{label}</span>
        <span className="font-medium editable-text" contentEditable="true" suppressContentEditableWarning>{value}</span>
    </div>
)

const UsdtModal = ({ isOpen, onClose }: UsdtModalProps) => {

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="bg-[#2c2c2c] rounded-xl shadow-2xl w-full max-w-md m-4 p-6 relative modal-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-[#fcd535] transition-colors text-2xl"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#3a3a3a]">
                    <h2 className="text-2xl font-bold editable-text" contentEditable="true" suppressContentEditableWarning>USDT</h2>
                    <span className="text-gray-400 editable-text" contentEditable="true" suppressContentEditableWarning>TetherUS</span>
                </div>
                
                <div className="space-y-5">
                    <div>
                        <div className="text-4xl font-bold editable-text" contentEditable="true" suppressContentEditableWarning>0</div>
                        <div className="text-gray-400 editable-text" contentEditable="true" suppressContentEditableWarning>≈ $0.00</div>
                    </div>

                    <div className="flex justify-around">
                        <button className="bg-[#fcd535] text-black px-5 py-2 rounded-md font-semibold hover:bg-[#e0b92d] transition-colors w-full mx-1 editable-text" contentEditable="true" suppressContentEditableWarning>Convertir</button>
                        <button className="bg-[#3a3a3a] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#4a4a4a] transition-colors w-full mx-1 editable-text" contentEditable="true" suppressContentEditableWarning>Depositar</button>
                        <button className="bg-[#3a3a3a] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#4a4a4a] transition-colors w-full mx-1 editable-text" contentEditable="true" suppressContentEditableWarning>Retirar</button>
                    </div>

                    <ModalCard title="Distribución de Activos">
                        <AssetDistributionRow label="Disponible" value="0,00" />
                        <AssetDistributionRow label="Retirando" value="0,00" />
                        <AssetDistributionRow label="Órdenes Spot" value="0,00" />
                        <AssetDistributionRow label="Órdenes de Conversión" value="0,00" />
                        <AssetDistributionRow label="Congelado" value="0,00" />
                    </ModalCard>
                    
                     <ModalCard title="Historial">
                        <div className="flex justify-between items-center text-sm mb-2">
                           <span className="editable-text" contentEditable="true" suppressContentEditableWarning>Transferencia</span>
                           <span className="text-gray-400 hover:text-white cursor-pointer editable-text" contentEditable="true" suppressContentEditableWarning>Todo</span>
                        </div>
                        <div className="text-sm editable-text" contentEditable="true" suppressContentEditableWarning>Funding</div>
                        <div className="text-xs text-gray-400 editable-text" contentEditable="true" suppressContentEditableWarning>28/04/2025 18:45</div>
                        <div className="text-sm text-red-500 font-medium editable-text" contentEditable="true" suppressContentEditableWarning>-694.31 USDT</div>
                    </ModalCard>
                </div>
            </div>
        </div>
    );
}

export default UsdtModal;