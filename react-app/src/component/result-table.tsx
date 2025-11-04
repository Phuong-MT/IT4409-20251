import React from "react";
import type { MergedResult, Student } from "../types";

interface ResultTableProps {
    student: Student;
    results: MergedResult[];
}

const ResultTable: React.FC<ResultTableProps> = ({ student, results }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Ket qua: {student.name}</h2>
            <p>
                MSSV: {student.sid} | DOB: {student.dob}
            </p>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "10px",
                }}
            >
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th style={thStyle}>Ma HP</th>
                        <th style={thStyle}>Ten hoc phan</th>
                        <th style={thStyle}>So tin chi</th>
                        <th style={thStyle}>Ho ky</th>
                        <th style={thStyle}>Diem chi tiet</th>
                        <th style={thStyle}>Diem chu</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((r) => (
                        <tr key={`${r.sid}-${r.cid}`}>
                            <td style={tdStyle}>{r.cid}</td>
                            <td style={tdStyle}>{r.courseName}</td>
                            <td style={tdStyle}>{r.credits}</td>
                            <td style={tdStyle}>{r.term}</td>
                            <td style={tdStyle}>{r.score.join(", ")}</td>
                            <td style={tdStyle}>{r.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const thStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    padding: "8px",
    fontWeight: "bold",
};

const tdStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "center",
};

export default ResultTable;
