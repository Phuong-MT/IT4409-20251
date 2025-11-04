import React, { useState } from "react";

interface SearchFormProps {
    onSearch: (id: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [input, setInput] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === "") return;
        onSearch(input.trim());
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Nhập mã số sinh viên..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                    padding: "8px",
                    width: "250px",
                    marginRight: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "8px 16px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Search
            </button>
        </form>
    );
};

export default SearchForm;
