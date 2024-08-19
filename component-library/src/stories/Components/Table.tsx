import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { GridOptions } from 'ag-grid-community'; // Data Grid Options
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

          // <Table
          //   rowData={[
          //     { month: "Leden", availability: "90%", revenue: "1 563 234 Kč", costs: "34 325 Kč", engineHours: "43 hodin" },
          //     { month: "Únor", availability: "100%", revenue: "1 234 964 Kč", costs: "76 325 Kč", engineHours: "18 hodin" },
          //     { month: "Březen", availability: "100%", revenue: "1 234 964 Kč", costs: "76 325 Kč", engineHours: "18 hodin" },
          //     { month: "Duben", availability: "100%", revenue: "1 234 964 Kč", costs: "76 325 Kč", engineHours: "18 hodin" },
          //     { month: "Květen", availability: "100%", revenue: "1 234 964 Kč", costs: "76 325 Kč", engineHours: "18 hodin" },
          //   ]}
          //   colDefs={[
          //     { headerName: "Měsíc", field: "month" },
          //     { headerName: "Dostupnost", field: "availability" },
          //     { headerName: "Tržby", field: "revenue" },
          //     { headerName: "Náklady", field: "costs" },
          //     { headerName: "Motohodiny", field: "engineHours" },
          //   ]}
          //   autoSizeStrategy={{
          //     type: "fitGridWidth",
          //   }}
          // />

export interface TableProps {
  data: string[][];
  columns: string[];
  // autoSizeStrategy?: GridOptions<any>[`autoSizeStrategy`];
}
export const Table: React.FC<TableProps> = ({ data, columns }) => {
  const rowData = data.map((item) => {
    const row: { [key: string]: string } = {};
    columns.forEach((column, index) => {
      row[column] = item[index];
    });
    return row;
  });

  const colDefs = columns.map((column) => ({
    headerName: column,
    field: column,
  }));

  const autoSizeStrategy: GridOptions<any>['autoSizeStrategy'] = {
    type: 'fitGridWidth',
  };

  return (
    <div
      className="ag-theme-quartz"
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        domLayout='autoHeight'
        autoSizeStrategy={autoSizeStrategy}
      />
    </div>
  )
}