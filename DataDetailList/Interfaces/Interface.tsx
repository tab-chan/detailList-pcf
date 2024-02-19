import { IColumn } from '@fluentui/react';


// Interface.tsx

export interface IDataItem {
    key: string;
    name: string;
    value: string;
}

export interface IState {
    items: IDataItem[];
    columns: IColumn[];
    selectedItemDetails?: IDataItemDetails; // Armazena os detalhes do item selecionado
    
}

export interface IProps {
    // Propriedades conforme necessário, por exemplo, passar um identificador para buscar os dados
}

// Dentro do arquivo Interface.ts ou Interface.tsx

export interface IDataItemDetails {
    key: string;
    detail1: string;
    detail2: string;
    // Inclua outras propriedades conforme necessário para os detalhes do item
}


