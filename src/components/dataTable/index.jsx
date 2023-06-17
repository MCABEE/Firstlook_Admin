/* eslint-disable react/prop-types */
import { DataGrid } from "@mui/x-data-grid";

export const DataTable = ({rows, columns, showCheckbox}) => {
  return (
    <div style={{ height: '70vh', width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
        checkboxSelection={showCheckbox}
      />
    </div>
  );
};
