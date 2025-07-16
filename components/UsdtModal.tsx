import React from 'react';

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

                    <div className="space-y-4">
                        <button className="w-full bg-[#fcd535] text-black py-3 rounded-lg font-semibold hover:bg-[#e0b92d] transition-colors">
                            Depositar
                        </button>
                        <button className="w-full bg-[#3c3c3c] text-white py-3 rounded-lg font-semibold hover:bg-[#4c4c4c] transition-colors">
                            Retirar
                        </button>
                        <button className="w-full bg-[#3c3c3c] text-white py-3 rounded-lg font-semibold hover:bg-[#4c4c4c] transition-colors">
                            Transferir
                        </button>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#3c3c3c]">
                        <h3 className="text-sm font-semibold mb-2">Historial Reciente</h3>
                        <div className="text-sm text-gray-400">
                            No hay transacciones recientes
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsdtModal;