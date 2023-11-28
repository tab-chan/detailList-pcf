import { Badge, Divider, FluentProvider, mergeClasses, Slider, SliderProps, Tooltip, useId } from '@fluentui/react-components'
import * as React from 'react';
import { useEffect, useState } from 'react';


export interface DadosClienteAppProps {
    dadosCliente: any;
    dadosClienteApp: any;
    setDadosClienteApp: any;
    context : any;
}


export const DadosClienteApp: React.FC<DadosClienteAppProps> = (props) => {

    return (
        <FluentProvider>
            <div className="dadosClienteApp">
                <div className="dadosClienteApp__header">
                    <div className="dadosClienteApp__header__title">
                        <h2>Informações do Cliente</h2>
                    </div>
                    <div className="dadosClienteApp__header__badge">
                        <Badge color="brand">Cliente</Badge>
                    </div>
                </div>
                <div className="dadosClienteApp__content">
                    <div className="dadosClienteApp__content__item">
                        <h3>Nome</h3>
                        <p>{props.dadosCliente.nome}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Idade</h3>
                        <p>{props.dadosCliente.idade}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>CPF</h3>
                        <p>{props.dadosCliente.cpf}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>RG</h3>
                        <p>{props.dadosCliente.rg}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Endereço</h3>
                        <p>{props.dadosCliente.endereco}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Telefone</h3>
                        <p>{props.dadosCliente.telefone}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>E-mail</h3>
                        <p>{props.dadosCliente.email}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Observações</h3>
                        <p>{props.dadosCliente.observacoes}</p>
                    </div>
                </div>
            </div>
        </FluentProvider>
    );    
}