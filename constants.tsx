import React from 'react';
import { SidebarItemType, AssetType } from './types';
import { 
    DashboardIcon, AssetsIcon, SpotIcon, MarginIcon, FundsIcon, 
    WalletIcon, OrdersIcon, RewardsIcon, ReferralsIcon, AccountIcon, SettingsIcon 
} from './components/icons';

export const SIDEBAR_ITEMS: SidebarItemType[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'assets', label: 'Activos', icon: <AssetsIcon /> },
    { id: 'spot', label: 'Spot', icon: <SpotIcon /> },
    { id: 'margin', label: 'Margen', icon: <MarginIcon /> },
    { id: 'funds', label: 'Fondos', icon: <FundsIcon /> },
    { id: 'third-party', label: 'Billetera de Terceros', icon: <WalletIcon /> },
    { id: 'orders', label: 'Órdenes', icon: <OrdersIcon /> },
    { id: 'rewards', label: 'Centro de Recompensas', icon: <RewardsIcon /> },
    { id: 'referrals', label: 'Referidos', icon: <ReferralsIcon /> },
    { id: 'account', label: 'Cuenta', icon: <AccountIcon /> },
    { id: 'settings', label: 'Configuración', icon: <SettingsIcon /> },
];

export const ASSETS_DATA = [
    {
        id: 'usdt',
        name: 'USDT',
        fullName: 'Tether USD',
        amount: '0,00',
        cost: '$1,0000',
        pnl: '+0,00%',
        pnlColor: 'text-green-400',
        icon: <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">T</div>
    },
    {
        id: 'btc',
        name: 'BTC',
        fullName: 'Bitcoin',
        amount: '0,00000000',
        cost: '$43,250.50',
        pnl: '+2,45%',
        pnlColor: 'text-green-400',
        icon: <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs">₿</div>
    },
    {
        id: 'eth',
        name: 'ETH',
        fullName: 'Ethereum',
        amount: '0,0000',
        cost: '$2,650.75',
        pnl: '-1,20%',
        pnlColor: 'text-red-400',
        icon: <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">Ξ</div>
    }
];
];

export const ASSETS_DATA: AssetType[] = [
    {
        id: 'bonk',
        icon: <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-lg">B</div>,
        name: 'BONK',
        fullName: 'Bonk',
        amount: '12,000.00',
        cost: '$0.00',
        pnl: '+$0.06',
        pnlColor: 'text-green-500'
    },
    {
        id: 'cop',
        icon: <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">C</div>,
        name: 'COP',
        fullName: 'Colombian...',
        amount: '0.006',
        cost: '$0.00',
        pnl: '--',
        pnlColor: ''
    },
    {
        id: 'usdt',
        icon: <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">U</div>,
        name: 'USDT',
        fullName: 'TetherUS',
        amount: '0.00',
        cost: '$0.00',
        pnl: '--',
        pnlColor: ''
    }
];
