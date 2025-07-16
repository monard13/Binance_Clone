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
