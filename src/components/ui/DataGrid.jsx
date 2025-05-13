
import React from 'react';
import { cn } from "@/lib/utils";

function DataGrid({
  columns,
  data,
  keyField,
  emptyMessage = "No data available",
  className,
  onRowClick
}) {
  return (
    <div className={cn("w-full overflow-auto rounded-md border", className)}>
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={cn("data-grid-header text-left", column.className)}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="py-8 text-center text-muted-foreground"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={String(row[keyField])}
                className={cn("data-grid-row", onRowClick && "cursor-pointer")}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((column, columnIndex) => (
                  <td
                    key={columnIndex}
                    className={cn("data-grid-cell", column.className)}
                  >
                    {typeof column.accessor === 'function'
                      ? column.accessor(row)
                      : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataGrid;
