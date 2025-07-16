
import React from 'react';

const Content = ({ onUsdtClick }: { onUsdtClick: () => void }) => {
    const cryptoAssets = [
        {
            id: 'cop',
            name: 'COP',
            fullName: 'Colombian...',
            icon: <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-lg">$</div>,
            amount: '0.006',
            value: '$0.00',
            available: '0.006',
            actions: ['Convert', 'Trade']
        },
        {
            id: 'usdt',
            name: 'USDT',
            fullName: 'TetherUS',
            icon: '₮',
            amount: '0.00',
            value: '$0.00',
            available: '0.00',
            actions: ['Convert', 'Trade']
        },
        {
            id: 'bnb',
            name: 'BNB',
            fullName: 'BNB',
            icon: '🔸',
            amount: '0.00',
            value: '$0.00',
            available: '0.00',
            actions: ['Convert', 'Trade']
        },
        {
            id: 'eth',
            name: 'ETH',
            fullName: 'Ethereum',
            icon: 'Ξ',
            amount: '0.00',
            value: '$0.00',
            available: '0.00',
            actions: ['Convert', 'Trade']
        },
        {
            id: 'btc',
            name: 'BTC',
            fullName: 'Bitcoin',
            icon: '₿',
            amount: '0.00',
            value: '$0.00',
            available: '0.00',
            actions: ['Convert', 'Trade']
        },
        {
            id: '1000cat',
            name: '1000CAT',
            fullName: '',
            icon: '🐱',
            amount: '0.00',
            value: '$0.00',
            available: '0.00',
            actions: ['Convert', 'Trade']
        }
    ];

    return (
        <div className="flex-1 bg-[#181a20] p-6">
            {/* Balance Section */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-xl text-[#eaecef] mb-2 flex items-center">
                            Estimated Balance 
                            <svg className="w-4 h-4 ml-2 text-[#848e9c]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </h1>
                        <div className="flex items-baseline">
                            <span className="text-3xl font-semibold text-white">0.0000015</span>
                            <span className="text-[#848e9c] ml-2 text-sm">USDT</span>
                            <svg className="w-4 h-4 ml-2 text-[#848e9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="text-[#848e9c] text-sm mt-1">≈ $0.00</div>
                        <div className="flex items-center mt-2">
                            <span className="text-[#848e9c] text-sm">Today's PnL</span>
                            <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                            <span className="text-green-500 text-sm ml-1">+$0.00(0.30%)</span>
                            <svg className="w-3 h-3 ml-1 text-[#848e9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <button className="bg-[#2b3139] text-[#eaecef] px-4 py-2 rounded text-sm hover:bg-[#3c4145] transition-colors">
                            Deposit
                        </button>
                        <button className="bg-[#2b3139] text-[#eaecef] px-4 py-2 rounded text-sm hover:bg-[#3c4145] transition-colors">
                            Withdraw
                        </button>
                        <button className="bg-[#2b3139] text-[#eaecef] px-4 py-2 rounded text-sm hover:bg-[#3c4145] transition-colors">
                            Transfer
                        </button>
                        <button className="bg-[#2b3139] text-[#eaecef] px-2 py-2 rounded text-sm hover:bg-[#3c4145] transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Spot Section */}
            <div className="bg-[#1e2329] rounded-lg">
                <div className="p-4 border-b border-[#2b3139]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-medium text-white">Spot</h2>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Small Amount Exchange"
                                    className="bg-[#2b3139] text-[#eaecef] px-3 py-2 rounded text-sm w-48 placeholder-[#848e9c]"
                                />
                                <svg className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#848e9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-[#848e9c]">
                                <input type="checkbox" className="rounded" />
                                <span>Hide assets &lt;1 USD</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-5 gap-4 p-4 text-[#848e9c] text-sm border-b border-[#2b3139]">
                    <div>Coin</div>
                    <div className="text-right">Amount</div>
                    <div className="text-right">Available</div>
                    <div className="text-right">Action</div>
                    <div></div>
                </div>

                {/* Asset Rows */}
                {cryptoAssets.map((asset) => (
                    <div 
                        key={asset.id}
                        className="grid grid-cols-5 gap-4 p-4 border-b border-[#2b3139] hover:bg-[#2b3139] transition-colors cursor-pointer"
                        onClick={asset.id === 'usdt' ? onUsdtClick : undefined}
                    >
                        <div className="flex items-center">
                            <div className="mr-3">
                                {typeof asset.icon === 'string' ? (
                                    <div className="w-8 h-8 rounded-full bg-[#fcd535] flex items-center justify-center text-black font-bold text-sm">
                                        {asset.icon}
                                    </div>
                                ) : (
                                    asset.icon
                                )}
                            </div>
                            <div>
                                <div className="text-[#eaecef] font-medium">{asset.name}</div>
                                {asset.fullName && <div className="text-[#848e9c] text-xs">{asset.fullName}</div>}
                            </div>
                        </div>
                        
                        <div className="text-right">
                            <div className="text-[#eaecef]">{asset.amount}</div>
                            <div className="text-[#848e9c] text-xs">{asset.value}</div>
                        </div>
                        
                        <div className="text-right">
                            <div className="text-[#eaecef]">{asset.available}</div>
                        </div>
                        
                        <div className="text-right">
                            <div className="flex justify-end space-x-2">
                                <button className="text-[#fcd535] text-sm hover:text-[#e0b92d]">Convert</button>
                                <button className="text-[#fcd535] text-sm hover:text-[#e0b92d]">Trade</button>
                            </div>
                        </div>
                        
                        <div className="text-right">
                            <button className="text-[#848e9c] hover:text-[#eaecef]">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
