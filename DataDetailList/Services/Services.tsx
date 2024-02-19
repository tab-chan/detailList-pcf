// Services.ts
import { IDataItem, IDataItemDetails } from '../Interfaces/Interface'; // Ajuste o caminho conforme necessário

const Services = {
  getData: async (): Promise<IDataItem[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { key: '1', name: 'Dado 1', value: 'Outro dado 1' },
          { key: '2', name: 'Dado 2', value: 'Outro dado 2' },
          // Adicione mais objetos conforme necessário
        ]);
      }, 1000);
    });
  },
  
  // Método para buscar detalhes de um item específico
  getDataDetails: async (key: string): Promise<IDataItemDetails> => {
    return new Promise(resolve => {
      setTimeout(() => {
        // Simulação de detalhes para o item baseado no key
        // Aqui você precisa ajustar para retornar os detalhes reais esperados
        const details = {
          key: key,
          detail1: "Detalhe específico 1 para item " + key,
          detail2: "Detalhe específico 2 para item " + key,
          // Adicione mais detalhes conforme necessário
        };
        resolve(details);
      }, 500); // Tempo simulado de resposta menor para diferenciar da lista geral
    });
  }
};

export default Services;
