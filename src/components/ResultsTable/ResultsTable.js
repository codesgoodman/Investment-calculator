import React from "react";

function ResultsTable(props) {
  console.log(props.data);
  return (
    <table className="result">
      <thead>
        <tr>
          <th>{props.data.year}</th>
          <th>{props.data.savingsEndOfYear}</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultsTable;
