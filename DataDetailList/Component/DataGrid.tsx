import type { JSX } from "react";
import * as React from "react";
import { ToggleButton, InfoLabel, makeStyles, tokens, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, DataGridProps, TableColumnDefinition, createTableColumn, TableCellLayout, Avatar, PresenceBadgeStatus } from "@fluentui/react-components";
import { DocumentRegular, EditRegular, FolderRegular, OpenRegular, PeopleRegular, DocumentPdfRegular, VideoRegular } from "@fluentui/react-icons";
import { ChevronLeft20Regular, ChevronRight20Regular } from '@fluentui/react-icons';


const itemsPerPage = 2; // Define quantos itens por página você quer mostrar

type Item = {
  occurrenceNumber: string;
  status: string;
  channel: string;
  central: string;
  additionalSubject: string;
  creationDate: string;
  deadline: string;
  daysOpen: number;
};


const items: Item[] = [
  {
    occurrenceNumber: "OC001",
    status: "Em análise",
    channel: "Email",
    central: "Central 1",
    additionalSubject: "Questão sobre pagamento",
    creationDate: "2024-02-10",
    deadline: "2024-02-20",
    daysOpen: 2,
  },
  {
    occurrenceNumber: "OC002",
    status: "Resolvido",
    channel: "Telefone",
    central: "Central 2",
    additionalSubject: "Dúvida no uso do produto",
    creationDate: "2024-02-11",
    deadline: "2024-02-21",
    daysOpen: 1,
  },
  {
    occurrenceNumber: "OC003",
    status: "Aberto",
    channel: "Chat",
    central: "Central 3",
    additionalSubject: "Problema com a entrega",
    creationDate: "2024-02-12",
    deadline: "2024-02-22",
    daysOpen: 5,
  },
  {
    occurrenceNumber: "OC004",
    status: "Fechado",
    channel: "Presencial",
    central: "Central 4",
    additionalSubject: "Reclamação de serviço",
    creationDate: "2024-02-13",
    deadline: "2024-02-23",
    daysOpen: 3,
  },
];


const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "occurrenceNumber",
    compare: (a, b) => a.occurrenceNumber.localeCompare(b.occurrenceNumber),
    renderHeaderCell: () => "Número da Ocorrência",
    renderCell: (item) => item.occurrenceNumber,
  }),
  createTableColumn<Item>({
    columnId: "status",
    compare: (a, b) => a.status.localeCompare(b.status),
    renderHeaderCell: () => "Status",
    renderCell: (item) => item.status,
  }),
  createTableColumn<Item>({
    columnId: "channel",
    compare: (a, b) => a.channel.localeCompare(b.channel),
    renderHeaderCell: () => "Canal",
    renderCell: (item) => item.channel,
  }),
  createTableColumn<Item>({
    columnId: "central",
    compare: (a, b) => a.central.localeCompare(b.central),
    renderHeaderCell: () => "Central",
    renderCell: (item) => item.central,
  }),
  createTableColumn<Item>({
    columnId: "additionalSubject",
    compare: (a, b) => a.additionalSubject.localeCompare(b.additionalSubject),
    renderHeaderCell: () => "Assunto Complementar",
    renderCell: (item) => item.additionalSubject,
  }),
  createTableColumn<Item>({
    columnId: "creationDate",
    compare: (a, b) => a.creationDate.localeCompare(b.creationDate),
    renderHeaderCell: () => "Data Criação",
    renderCell: (item) => item.creationDate,
  }),
  createTableColumn<Item>({
    columnId: "deadline",
    compare: (a, b) => a.deadline.localeCompare(b.deadline),
    renderHeaderCell: () => "Prazo da Ocorrência",
    renderCell: (item) => item.deadline,
  }),
  createTableColumn<Item>({
    columnId: "daysOpen",
    compare: (a, b) => a.daysOpen - b.daysOpen,
    renderHeaderCell: () => "Dias em Aberto",
    renderCell: (item) => `${item.daysOpen}`,
  }),
];

const useStyles = makeStyles({
  wrapper: {
    alignItems: "center",
    columnGap: "15px",
    display: "flex",
  },
  container: {
    alignItems: "start",
    display: "flex",
    flexDirection: "row",
    rowGap: tokens.spacingVerticalS,
    justifyContent: "center", // Centraliza os botões de paginação horizontalmente
  },
});


export const SortControlledWithPagination = () => {
  const [sortState, setSortState] = React.useState<Parameters<NonNullable<DataGridProps["onSortChange"]>>[1]>({ sortColumn: "file", sortDirection: "ascending" });
  const [currentPage, setCurrentPage] = React.useState(0); // Página atual começa do 0
  const styles = useStyles();

  const onSortChange: DataGridProps["onSortChange"] = (e, nextSortState) => {
    setSortState(nextSortState);
  };

  const paginatedItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const goToNextPage = () => setCurrentPage((current) => Math.min(current + 1, totalPages - 1));
  const goToPreviousPage = () => setCurrentPage((current) => Math.max(current - 1, 0));

  return (
    <div>
      <DataGrid
        items={paginatedItems}
        columns={columns}
        sortable
        sortState={sortState}
        onSortChange={onSortChange}
      >
        <DataGridHeader>
          <DataGridRow>
            {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody<Item>>
          {({ item, rowId }) => (
            <DataGridRow<Item> key={rowId}>
              {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
      <div className={styles.container}>
        
        <ToggleButton size="small" onClick={goToPreviousPage} disabled={currentPage === 0}>
          <ChevronLeft20Regular /> Anterior
        </ToggleButton>
        <InfoLabel>Página {currentPage + 1} de {totalPages}</InfoLabel>
        <ToggleButton size="small" onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
          Próxima <ChevronRight20Regular />
        </ToggleButton>
      </div>
    </div>
  );
};


