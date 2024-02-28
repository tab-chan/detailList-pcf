// Services.ts
import { IDataItem, IDataItemDetails, Item } from '../Interfaces/Interface'; // Ajuste o caminho conforme necessário

const mockItems: Item[] = [
  // ... (Your 4 mocked data items here)

  // Additional 6 mocked data items to make it 10 in total
  {
    occurrenceNumber: "OC005",
    status: "Pendente",
    channel: "Email",
    central: "Central 5",
    additionalSubject: "Informações de conta",
    creationDate: "2024-02-14",
    deadline: "2024-02-24",
    daysOpen: 4,
  },
  {
    occurrenceNumber: "OC006",
    status: "Em progresso",
    channel: "Chat",
    central: "Central 1",
    additionalSubject: "Suporte técnico",
    creationDate: "2024-02-15",
    deadline: "2024-02-25",
    daysOpen: 3,
  },
  {
    occurrenceNumber: "OC007",
    status: "Cancelado",
    channel: "Telefone",
    central: "Central 2",
    additionalSubject: "Elogio",
    creationDate: "2024-02-16",
    deadline: "2024-02-26",
    daysOpen: 1,
  },
  {
    occurrenceNumber: "OC008",
    status: "Em análise",
    channel: "Presencial",
    central: "Central 3",
    additionalSubject: "Feedback do produto",
    creationDate: "2024-02-17",
    deadline: "2024-02-27",
    daysOpen: 2,
  },
  {
    occurrenceNumber: "OC009",
    status: "Resolvido",
    channel: "Email",
    central: "Central 4",
    additionalSubject: "Questão técnica",
    creationDate: "2024-02-18",
    deadline: "2024-02-28",
    daysOpen: 0,
  },
  {
    occurrenceNumber: "OC010",
    status: "Fechado",
    channel: "Chat",
    central: "Central 5",
    additionalSubject: "Atualização de dados",
    creationDate: "2024-02-19",
    deadline: "2024-03-01",
    daysOpen: 5,
  },
];

const Services = {

  getData: async (): Promise<Item[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockItems);
      }, 1000);
    });
  },

  getDataDetails: async (occurrenceNumber: string): Promise<Item | undefined> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const foundItem = mockItems.find(item => item.occurrenceNumber === occurrenceNumber);
        resolve(foundItem);
      }, 500);
    });
  },
};

export default Services;
export type { Item };
