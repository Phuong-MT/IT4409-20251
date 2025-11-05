function ResultTable({ results, onEdit, onDelete }) {
    return (
        <table
            border="1"
            cellPadding="6"
            style={{
                borderCollapse: "collapse",
                width: "100%",
                marginTop: "10px",
            }}
        >
            <thead style={{ background: "#f0f0f0" }}>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Date of Birth</th>
                    <th>Edit or delete</th>
                </tr>
            </thead>
            <tbody>
                {results.map((u) => (
                    <tr key={u.id || ""}>
                        <td>{u.id || ""}</td>
                        <td>{u.userName || ""}</td>
                        <td>{u.fullName || ""}</td>
                        <td>{u.email || ""}</td>
                        <td>{u.phone || ""}</td>
                        <td>
                            {u.address.street || ""}, {u.address.city || ""},{" "}
                            {u.address.country || ""}
                        </td>
                        <td>{u.dateOfBirth || ""}</td>
                        <td>
                            <button
                                onClick={() => {
                                    onEdit?.(u);
                                }}
                            >
                                edit
                            </button>
                            <button
                                onClick={() => {
                                    onDelete?.(u);
                                }}
                            >
                                delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
