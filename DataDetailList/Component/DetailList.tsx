// DetailList.tsx
import * as React from 'react';
import { DetailsList, IColumn } from '@fluentui/react';
import Services from '../Services/Services';
import { IDataItem, IState, IProps } from '../Interfaces/Interface';

class DetailList extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            items: [],
            columns: [
                { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200 },
                { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200 },
                // Defina mais colunas conforme necessário
            ]
        };
    }
    
    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const data = await Services.getData();
        this.setState({
            items: data,
            columns: this.state.columns // Mantendo as colunas definidas no construtor
        });
    }

    onItemInvoked = (item: IDataItem): void => {
        console.log('Item invoked:', item);
        // Potencialmente, recarregar dados ou outra lógica aqui
    }

    render() {
        const { items, columns } = this.state;

        return (
            <DetailsList
              items={items}
              columns={columns}
              onItemInvoked={this.onItemInvoked}
              // Configure outras propriedades conforme necessário
            />
        );
    }
}

export default DetailList;
