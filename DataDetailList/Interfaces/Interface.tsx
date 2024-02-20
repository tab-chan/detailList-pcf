import { IColumn } from '@fluentui/react';

export interface IDataItem {
    key: string;
    name: string;
    value: string;
}

export interface IState {
    items: IDataItem[];
    columns: IColumn[];
    selectedItemDetails?: IDataItemDetails;
    sortedColumnKey?: string; // Identifica a coluna pela qual a lista está sendo ordenada
    isSortedDescending?: boolean; // Indica se a ordenação é descendente
}

export interface IProps {
    // Propriedades conforme necessário, por exemplo, passar um identificador para buscar os dados
}

export interface IDataItemDetails {
    key: string;
    detail1: string;
    detail2: string;
    // Inclua outras propriedades conforme necessário para os detalhes do item
}
