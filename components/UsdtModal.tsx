
import React, { useEffect, useCallback } from 'react';

interface UsdtModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ModalCardProps {
    title: string;
    children: React.ReactNode;
}

interface AssetDistributionRowProps {
    label: string;
    value: string;
}

const ModalCard = ({ title, children }: ModalCardProps) => (
    <div className="bg-[#2a2a2a] rounded-lg p-4 mb-4">
        <h3 className="text-white font-semibold mb-3 editable-text" contentEditable="true" suppressContentEditableWarning>
            {title}
        </h3>
        {children}
    </div>
);

const AssetDistributionRow = ({ label, value }: AssetDistributionRowProps) => (
    <div className="flex justify-between items-center mb-2 text-sm">
        <span className="text-gray-400 editable-text" contentEditable="true" suppressContentEditableWarning>
            {label}
        </span>
        <span className="text-white editable-text" contentEditable="true" suppressContentEditableWarning>
            {value} USDT
        </span>
    </div>
);

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a1a] rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto modal-fade-in">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">₮</span>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold editable-text" contentEditable="true" suppressContentEditableWarning>
                                Tether USD
                            </h2>
                            <p className="text-gray-400 text-sm editable-text" contentEditable="true" suppressContentEditableWarning>
                                USDT
                            </p>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-4">
                    <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-white mb-2 editable-text" contentEditable="true" suppressContentEditableWarning>
                            0,00 USDT
                        </div>
                        <div className="text-gray-400 text-sm editable-text" contentEditable="true" suppressContentEditableWarning">
                            ≈ $0,00
                        </div>
                    </div>

                    <div className="flex justify-around mb-6">
                        <button className="bg-[#fcd535] text-black px-5 py-2 rounded-md font-semibold hover:bg-[#e0b92d] transition-colors w-full mx-1 editable-text" contentEditable="true" suppressContentEditableWarning>
                            Convertir
                        </button>
                        <button className="bg-[#3a3a3a] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#4a4a4a] transition-colors w-full mx-1 editable-text" contentEditable="true" suppressContentEditableWarning>
                            Depositar
                        </button>
                        <button className="bg-[#3a3a3a] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#4a4a4a] transition-colors w-full mx-1 editable-text" contentEditable="true" suppressContentEditableWarning>
                            Retirar
                        </button>
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
                            <span className="editable-text" contentEditable="true" suppressContentEditableWarning>
                                Transferencia
                            </span>
                            <span className="text-gray-400 hover:text-white cursor-pointer editable-text" contentEditable="true" suppressContentEditableWarning>
                                Todo
                            </span>
                        </div>
                        <div className="text-sm editable-text" contentEditable="true" suppressContentEditableWarning>
                            Funding
                        </div>
                        <div className="text-xs text-gray-400 editable-text" contentEditable="true" suppressContentEditableWarning>
                            28/04/2025 18:45
                        </div>
                        <div className="text-sm text-red-500 font-medium editable-text" contentEditable="true" suppressContentEditableWarning>
                            -694.31 USDT
                        </div>
                    </ModalCard>
                </div>
            </div>
        </div>
    );
};

export default UsdtModal;
