import React from 'react';
import { AssetType } from '../types';
import { ASSETS_DATA } from '../constants';

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-[#2c2c2c] rounded-lg p-4 ${className}`}>
        {children}
    </div>
);

const AssetRow = ({ asset, onClick }: { asset: AssetType; onClick?: () => void }) => (
    <div 
        className={`flex items-center justify-between p-3 border-b border-[#3c3c3c] last:border-b-0 ${onClick ? 'cursor-pointer hover:bg-[#3c3c3c]' : ''}`}
        onClick={onClick}
    >
        <div className="flex items-center">
            <div className="mr-3">{asset.icon}</div>
            <div>
                <div className="font-medium">{asset.name}</div>
                <div className="text-sm text-gray-400">{asset.fullName}</div>
            </div>
        </div>
        <div className="text-right">
            <div className="font-medium">{asset.amount}</div>
            <div className="text-sm text-gray-400">{asset.cost}</div>
        </div>
        <div className={`text-right ${asset.pnlColor}`}>
            <div className="font-medium">{asset.pnl}</div>
        </div>
    </div>
);

const Content = ({ onUsdtClick }: { onUsdtClick: () => void }) => {
    return (
        <div className="flex-1 p-4 md:p-6">
            <Card className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Activos</h2>
                <div>
                    {ASSETS_DATA.map(asset => (
                        <AssetRow 
                            key={asset.id} 
                            asset={asset} 
                            onClick={asset.id === 'usdt' ? onUsdtClick : undefined}
                        />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Content;