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
}

export interface IProps {
    // Propriedades conforme necessário, por exemplo, passar um identificador para buscar os dados
}
