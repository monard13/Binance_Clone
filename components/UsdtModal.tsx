import React from 'react';

const ModalCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-[#2a2a2a] p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-3 editable-text" contentEditable="true" suppressContentEditableWarning>
            {title}
        </h3>
        {children}
    </div>
);

const AssetDistributionRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between items-center py-2 border-b border-[#3a3a3a] last:border-b-0">
        <span className="text-gray-400 editable-text" contentEditable="true" suppressContentEditableWarning>
            {label}
        </span>
        <span className="editable-text" contentEditable="true" suppressContentEditableWarning>
            {value} USDT
        </span>
    </div>
);

const UsdtModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a1a1a] rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto modal-fade-in">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold editable-text" contentEditable="true" suppressContentEditableWarning>
                            USDT
                        </h2>
                        <button 
                            onClick={onClose}
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    <div className="text-center mb-6">
                        <div className="text-3xl font-bold mb-2 editable-text" contentEditable="true" suppressContentEditableWarning>
                            0,00 USDT
                        </div>
                        <div className="text-gray-400 text-sm editable-text" contentEditable="true" suppressContentEditableWarning>
                            ≈ $0,00
                        </div>
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
                    </ModalCard>
                </div>
            </div>
        </div>
    );
};

export default UsdtModal;