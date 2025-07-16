
import React from 'react';

const UsdtModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#1e2329] rounded-lg w-80 max-h-[90vh] overflow-y-auto modal-fade-in border border-[#2b3139]">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#2b3139]">
                    <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold mr-3">
                            ₮
                        </div>
                        <div>
                            <div className="text-white font-medium">USDT</div>
                            <div className="text-[#848e9c] text-xs">TetherUS</div>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-[#848e9c] hover:text-white text-xl"
                    >
                        ×
                    </button>
                </div>

                {/* Balance */}
                <div className="p-6 text-center border-b border-[#2b3139]">
                    <div className="text-3xl font-bold text-white mb-2">0</div>
                    <div className="text-[#848e9c] text-sm">≈ $0.00</div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 border-b border-[#2b3139]">
                    <div className="flex space-x-3">
                        <button className="flex-1 bg-[#2b3139] text-white py-2 px-4 rounded text-sm font-medium hover:bg-[#3c4145] transition-colors">
                            Convert
                        </button>
                        <button className="flex-1 bg-[#2b3139] text-white py-2 px-4 rounded text-sm font-medium hover:bg-[#3c4145] transition-colors">
                            Deposit
                        </button>
                        <button className="flex-1 bg-[#2b3139] text-white py-2 px-4 rounded text-sm font-medium hover:bg-[#3c4145] transition-colors">
                            Withdraw
                        </button>
                    </div>
                </div>

                {/* Asset Distribution */}
                <div className="p-4 border-b border-[#2b3139]">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-medium">Asset Distribution</h3>
                        <svg className="w-4 h-4 text-[#848e9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-[#848e9c]">Available</span>
                            <span className="text-white">0.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#848e9c]">Withdrawing</span>
                            <span className="text-white">0.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#848e9c]">Spot Orders</span>
                            <span className="text-white">0.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#848e9c]">Convert Orders</span>
                            <span className="text-white">0.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#848e9c]">Frozen</span>
                            <span className="text-white">0.00</span>
                        </div>
                    </div>
                </div>

                {/* Spot and Earn Tabs */}
                <div className="p-4 border-b border-[#2b3139]">
                    <div className="flex space-x-4 mb-4">
                        <button className="flex items-center text-white text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            Spot
                        </button>
                        <button className="flex items-center text-[#848e9c] text-sm">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                            Earn
                        </button>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-[#848e9c]">USDT/OCAT</span>
                            <span className="text-white">USDT</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#848e9c]">1.0000 +0.05%</span>
                            <span className="text-white">APR up to 9.62%</span>
                        </div>
                    </div>
                </div>

                {/* History */}
                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-medium">History</h3>
                        <div className="flex items-center">
                            <span className="text-[#848e9c] text-sm mr-2">All</span>
                            <svg className="w-4 h-4 text-[#848e9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white text-sm">Transfer</div>
                                <div className="text-[#848e9c] text-xs">Funding</div>
                                <div className="text-[#848e9c] text-xs">04/26/2025 18:45</div>
                            </div>
                            <div className="text-right">
                                <div className="text-white text-sm">+696.31 USDT</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-white text-sm">Deposit</div>
                                <div className="text-[#848e9c] text-xs"></div>
                            </div>
                            <div className="text-right">
                                <div className="text-white text-sm">+696.31 USDT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsdtModal;
