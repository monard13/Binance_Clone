import React from 'react';

export interface SidebarItemType {
    id: string;
    label: string;
    icon: React.ReactNode;
}

export interface AssetType {
    id: string;
    icon: React.ReactNode;
    name: string;
    fullName: string;
    amount: string;
    cost: string;
    pnl: string;
    pnlColor: string;
}
