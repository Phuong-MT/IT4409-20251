function AddUser({ open, value, onChangeValue, onSubmit }) {
    if (!open) return null;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "16px",
                width: "320px",
                marginTop: "16px",
            }}
        >
            <input
                type="text"
                placeholder="Tên đăng nhập"
                value={value.userName || ""}
                onChange={(e) => onChangeValue("userName", e.target.value)}
            />
            <input
                placeholder="Họ và tên"
                value={value.fullName || ""}
                onChange={(e) => onChangeValue("fullName", e.target.value)}
            />
            <input
                placeholder="Email"
                value={value.email || ""}
                onChange={(e) => onChangeValue("email", e.target.value)}
            />
            <input
                placeholder="Số điện thoại"
                value={value.phone || ""}
                onChange={(e) => onChangeValue("phone", e.target.value)}
            />
            <input
                placeholder="Đường"
                value={value.address?.street || ""}
                onChange={(e) =>
                    onChangeValue("address", {
                        ...value.address,
                        street: e.target.value,
                    })
                }
            />
            <input
                placeholder="Thành phố"
                value={value.address?.city || ""}
                onChange={(e) =>
                    onChangeValue("address", {
                        ...value.address,
                        city: e.target.value,
                    })
                }
            />
            <input
                placeholder="Quốc gia"
                value={value.address?.country || ""}
                onChange={(e) =>
                    onChangeValue("address", {
                        ...value.address,
                        country: e.target.value,
                    })
                }
            />
            <input
                type="date"
                value={value.dateOfBirth || ""}
                onChange={(e) => onChangeValue("dateOfBirth", e.target.value)}
            />

            <button
                onClick={() => {
                    onSubmit?.();
                }}
            >
                Lưu người dùng
            </button>
        </div>
    );
}
