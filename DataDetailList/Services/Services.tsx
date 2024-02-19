// Services.ts
import { IDataItem } from '../Interfaces/Interface'; // Ajuste o caminho conforme necessário

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
  }
};

export default Services;
