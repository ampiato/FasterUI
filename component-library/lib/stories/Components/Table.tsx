import { Table as Model } from "../../gen"
import { RenderComponent } from "../../RenderComponent"
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { GridOptions } from 'ag-grid-community'; // Data Grid Options
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

const CellRenderer = (props: any) => {
  return <>{props.value}</>
}


export const Table: React.FC<Model> = ({ data, columns }) => {
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
    cellRenderer: CellRenderer,
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