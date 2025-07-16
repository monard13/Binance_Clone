import React from 'react';
import { SidebarItemType, AssetType } from './types';
import { 
    DashboardIcon, 
    AssetsIcon, 
    SpotIcon, 
    MarginIcon, 
    FundsIcon, 
    WalletIcon, 
    OrdersIcon, 
    RewardsIcon, 
    ReferralsIcon, 
    AccountIcon 
} from './components/icons';

export const SIDEBAR_ITEMS: SidebarItemType[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'assets', label: 'Activos', icon: <AssetsIcon /> },
    { id: 'spot', label: 'Spot', icon: <SpotIcon /> },
    { id: 'margin', label: 'Margen', icon: <MarginIcon /> },
    { id: 'funds', label: 'Fondos', icon: <FundsIcon /> },
    { id: 'wallet', label: 'Cartera', icon: <WalletIcon /> },
    { id: 'orders', label: 'Órdenes', icon: <OrdersIcon /> },
    { id: 'rewards', label: 'Recompensas', icon: <RewardsIcon /> },
    { id: 'referrals', label: 'Referidos', icon: <ReferralsIcon /> },
    { id: 'account', label: 'Cuenta', icon: <AccountIcon /> }
];

export const ASSETS_DATA: AssetType[] = [
    {
        id: 'usdt',
        name: 'USDT',
        fullName: 'Tether USD',
        amount: '0,00 USDT',
        cost: '≈ $0,00',
        pnl: '+0,00%',
        pnlColor: 'text-green-400',
        icon: <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">T</div>
    },
    {
        id: 'btc',
        name: 'BTC',
        fullName: 'Bitcoin',
        amount: '0,00000000 BTC',
        cost: '≈ $0,00',
        pnl: '+0,00%',
        pnlColor: 'text-green-400',
        icon: <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">₿</div>
    },
    {
        id: 'eth',
        name: 'ETH',
        fullName: 'Ethereum',
        amount: '0,00000000 ETH',
        cost: '≈ $0,00',
        pnl: '+0,00%',
        pnlColor: 'text-green-400',
        icon: <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">Ξ</div>
    }
];