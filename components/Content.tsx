import React from 'react';
import { AssetType } from '../types';
import { ASSETS_DATA } from '../constants';

interface ContentProps {
    onUsdtClick: () => void;
}

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-[#2c2c2c] rounded-xl p-5 mb-5 shadow-lg ${className}`}>
        {children}
    </div>
)

const BalanceCard = () => (
    <Card>
        <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
            <h2 className="text-xl font-semibold editable-text" contentEditable="true" suppressContentEditableWarning>Balance Estimado</h2>
            <div className="flex space-x-2">
                {['Depositar', 'Retirar', 'Transferir'].map(action => (
                    <button key={action} className="bg-[#3a3a3a] text-white px-4 py-2 text-sm rounded-md hover:bg-[#4a4a4a] transition-colors duration-200 editable-text" contentEditable="true" suppressContentEditableWarning>
                        {action}
                    </button>
                ))}
            </div>
        </div>
        <div className="text-3xl font-bold mb-2 editable-text" contentEditable="true" suppressContentEditableWarning>0.00000349 BTC</div>
        <div className="text-gray-400 mb-4 editable-text" contentEditable="true" suppressContentEditableWarning>≈ $0.42</div>
        <div className="flex items-center text-sm">
            <span className="editable-text" contentEditable="true" suppressContentEditableWarning>Hoy P&L</span>
            <span className="text-green-500 ml-2 editable-text" contentEditable="true" suppressContentEditableWarning">+$0.06 (16.98%)</span>
        </div>
        <div className="bg-[#1a1a1a] h-20 rounded-md mt-4 flex justify-center items-center text-gray-500 editable-text" contentEditable="true" suppressContentEditableWarning>
            [Gráfico de Balance]
        </div>
    </Card>
)

const AssetRow = ({ asset, onClick }: { asset: AssetType; onClick?: () => void }) => (
    <div 
        className={`grid grid-cols-4 gap-4 py-3 items-center border-b border-[#3a3a3a] last:border-b-0 ${onClick ? 'cursor-pointer hover:bg-[#3a3a3a] rounded-md -mx-2 px-2' : ''}`}
        onClick={onClick}
    >
        <div className="flex items-center space-x-3">
            {asset.icon}
            <div>
                <div className="font-medium editable-text" contentEditable="true" suppressContentEditableWarning>{asset.name}</div>
                <div className="text-xs text-gray-400 editable-text" contentEditable="true" suppressContentEditableWarning>{asset.fullName}</div>
            </div>
        </div>
        <div className="text-right editable-text" contentEditable="true" suppressContentEditableWarning>{asset.amount}</div>
        <div className="text-right editable-text" contentEditable="true" suppressContentEditableWarning>{asset.cost}</div>
        <div className={`text-right ${asset.pnlColor} editable-text`} contentEditable="true" suppressContentEditableWarning>{asset.pnl}</div>
    </div>
)


const AssetsCard = ({ onUsdtClick }: { onUsdtClick: () => void }) => (
    <Card>
        <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
            <h2 className="text-xl font-semibold editable-text" contentEditable="true" suppressContentEditableWarning>Mis Activos</h2>
            <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-400 editable-text" contentEditable="true" suppressContentEditableWarning>Vista de Monedas</span>
                <span className="text-gray-400 editable-text" contentEditable="true" suppressContentEditableWarning>Vista de Cuenta</span>
                <label htmlFor="hide-small-assets" className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" id="hide-small-assets" className="form-checkbox h-4 w-4 bg-[#3a3a3a] border-[#555] text-[#fcd535] rounded focus:ring-offset-0 focus:ring-0" />
                    <span className="editable-text" contentEditable="true" suppressContentEditableWarning>Ocultar Activos &lt; 1 USD</span>
                </label>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-4 text-gray-400 text-sm pb-2 border-b border-[#3a3a3a]">
            {['Moneda', 'Cantidad', 'Precio/Costo de la Moneda', 'Hoy P&L'].map(header => (
                <div key={header} className={`${header !== 'Moneda' ? 'text-right' : ''} editable-text`} contentEditable="true" suppressContentEditableWarning>{header}</div>
            ))}
        </div>
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
)

const CtaCard = ({ title, buttonText, info }: { title: string; buttonText: string; info?: React.ReactNode }) => (
     <Card className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-lg font-semibold editable-text" contentEditable="true" suppressContentEditableWarning>{title}</h2>
        <div className="flex items-center space-x-4">
            {info}
            <button className="bg-[#3a3a3a] text-white px-4 py-2 rounded-md hover:bg-[#4a4a4a] transition-colors duration-200 text-sm editable-text" contentEditable="true" suppressContentEditableWarning>{buttonText}</button>
        </div>
    </Card>
)

const Content = ({ onUsdtClick }: ContentProps) => {
    return (
        <div className="flex-grow p-4 md:p-6 lg:p-8">
            <h1 className="text-2xl font-bold mb-6 editable-text" contentEditable="true" suppressContentEditableWarning>Visión General - Billetera</h1>
            <BalanceCard />
            <AssetsCard onUsdtClick={onUsdtClick} />
            <CtaCard title="La forma más fácil de operar cripto a 0 tarifas" buttonText="Convertir" />
            <CtaCard 
                title="Operar cripto con herramientas avanzadas" 
                buttonText="Ir a Trade" 
                info={
                    <div className="flex items-center text-sm">
                        <span className="text-gray-400 mr-2 editable-text" contentEditable="true" suppressContentEditableWarning>BTC/USDT</span>
                        <span className="text-green-500 editable-text" contentEditable="true" suppressContentEditableWarning>+2.62%</span>
                    </div>
                }
            />
        </div>
    );
}

export default Content;