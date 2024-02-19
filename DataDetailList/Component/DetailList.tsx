import * as React from 'react';
import { DetailsList, IColumn } from '@fluentui/react';
import Services from '../Services/Services';
import { IDataItem, IDataItemDetails } from '../Interfaces/Interface';

interface IState {
    items: IDataItem[];
    columns: IColumn[];
    selectedItemDetails?: IDataItemDetails;
}

interface IProps {
    // Adicione quaisquer props adicionais aqui, se necessário
}

class DetailList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            items: [],
            columns: [
                { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200 },
                { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200 },
            ],
            selectedItemDetails: undefined
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const data = await Services.getData();
        this.setState({
            items: data
        });
    }

    onItemInvoked = async (item: IDataItem): Promise<void> => {
        console.log('Item invoked:', item);
        const details = await Services.getDataDetails(item.key);
        this.setState({ selectedItemDetails: details });
    }

    render() {
        const { items, columns, selectedItemDetails } = this.state;

        return (
            <div>
                <DetailsList
                    items={items}
                    columns={columns}
                    onItemInvoked={this.onItemInvoked}
                />
                {selectedItemDetails && (
                    <div>
                        <h3>Detalhes do Item:</h3>
                        <p>Detalhe 1: {selectedItemDetails.detail1}</p>
                        <p>Detalhe 2: {selectedItemDetails.detail2}</p>
                        {/* Renderize mais detalhes conforme necessário */}
                    </div>
                )}
            </div>
        );
    }
}

export default DetailList;
