import type { JSX } from "react";
import * as React from "react";
import { ToggleButton, InfoLabel, makeStyles, tokens , DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, DataGridProps, TableColumnDefinition, createTableColumn, TableCellLayout, Avatar, PresenceBadgeStatus } from "@fluentui/react-components";
import { DocumentRegular, EditRegular, FolderRegular, OpenRegular, PeopleRegular, DocumentPdfRegular, VideoRegular } from "@fluentui/react-icons";

const itemsPerPage = 2; // Define quantos itens por página você quer mostrar

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
      },
  });



type FileCell = {
  label: string;
  // eslint-disable-next-line no-undef
  icon: JSX.Element;
};


type LastUpdatedCell = {
    label: string;
    timestamp: number;
};

type LastUpdateCell = {
    label: string;
    icon: JSX.Element;
};

type AuthorCell = {
    label: string;
    status: PresenceBadgeStatus;
};

type Item = {
  file: FileCell;
  author: AuthorCell;
  lastUpdated: LastUpdatedCell;
  lastUpdate: LastUpdateCell;
};

const items: Item[] = [
  {
    file: { label: "Meeting notes", icon: <DocumentRegular /> },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular />,
    },
  },
  {
    file: { label: "Thursday presentation", icon: <FolderRegular /> },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    file: { label: "Training recording", icon: <VideoRegular /> },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular />,
    },
  },
  {
    file: { label: "Purchase order", icon: <DocumentPdfRegular /> },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular />,
    },
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "file",
    compare: (a, b) => {
      return a.file.label.localeCompare(b.file.label);
    },
    renderHeaderCell: () => {
      return "File";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.file.icon}>
          {item.file.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "author",
    compare: (a, b) => {
      return a.author.label.localeCompare(b.author.label);
    },
    renderHeaderCell: () => {
      return "Author";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout
          media={
            <Avatar
              aria-label={item.author.label}
              name={item.author.label}
              badge={{ status: item.author.status }}
            />
          }
        >
          {item.author.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "lastUpdated",
    compare: (a, b) => {
      return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
    },
    renderHeaderCell: () => {
      return "Last updated";
    },

    renderCell: (item) => {
      return item.lastUpdated.label;
    },
  }),
  createTableColumn<Item>({
    columnId: "lastUpdate",
    compare: (a, b) => {
      return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
    },
    renderHeaderCell: () => {
      return "Last update";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.lastUpdate.icon}>
          {item.lastUpdate.label}
        </TableCellLayout>
      );
    },
  }),
];

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
          <ToggleButton size="small"   onClick={goToPreviousPage} disabled={currentPage === 0}>Anterior</ToggleButton  >
          <InfoLabel >Página {currentPage + 1} de {totalPages}</InfoLabel >
          <ToggleButton  size="small" onClick={goToNextPage} disabled={currentPage === totalPages - 1}>Próxima</ToggleButton  >
        </div>
      </div>
    );
  };
