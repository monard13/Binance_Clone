
import { ReactNode } from 'react';

export interface SidebarItemType {
    id: string;
    label: string;
    icon: ReactNode;
}

export interface AssetType {
    id: string;
    name: string;
    fullName: string;
    amount: string;
    cost: string;
    pnl: string;
    pnlColor: string;
    icon: ReactNode;
}
