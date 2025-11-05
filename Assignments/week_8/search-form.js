function SearchForm({ value, onChangeValue, handleSubmit }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Tìm theo id,name, username"
                value={value}
                onChange={(e) => onChangeValue(e.target.value.toLowerCase())}
            />

            <button
                onClick={() => {
                    handleSubmit?.();
                }}
            >
                Search
            </button>
        </div>
    );
}
