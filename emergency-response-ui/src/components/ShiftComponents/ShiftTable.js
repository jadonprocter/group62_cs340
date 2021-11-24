import React from "react";
import { Table } from "react-bootstrap";

function ShiftTable({ shifts }) {
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Shift ID</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Holiday Pay</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift, i) => {
            return (
              <tr key={i}>
                {Object.values(shift).map((attribute, j) => {
                  return <td key={j}>{attribute}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ShiftTable;
