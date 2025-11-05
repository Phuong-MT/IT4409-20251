//sample data
let usersSample = [
    {
        id: 1,
        userName: "phuongt01",
        fullName: "Trương Minh Phương",
        email: "phuongt01@example.com",
        phone: "+84 912345678",
        address: {
            street: "12 Nguyễn Văn Cừ",
            city: "Hà Nội",
            country: "Việt Nam",
        },
        dateOfBirth: "1998-03-21",
    },
    {
        id: 2,
        userName: "linh.ng",
        fullName: "Nguyễn Thu Linh",
        email: "linh.ng@example.com",
        phone: "+84 936587412",
        address: {
            street: "45 Trần Hưng Đạo",
            city: "Hà Nội",
            country: "Việt Nam",
        },
        dateOfBirth: "1995-09-10",
    },
    {
        id: 3,
        userName: "hoangbao22",
        fullName: "Lê Hoàng Bảo",
        email: "hoangbao22@example.com",
        phone: "+84 979456123",
        address: {
            street: "88 Hai Bà Trưng",
            city: "Đà Nẵng",
            country: "Việt Nam",
        },
        dateOfBirth: "2000-12-04",
    },
    {
        id: 4,
        userName: "mytran",
        fullName: "Trần Mỹ Duyên",
        email: "mytran@example.com",
        phone: "+84 932147658",
        address: {
            street: "101 Nguyễn Huệ",
            city: "TP. Hồ Chí Minh",
            country: "Việt Nam",
        },
        dateOfBirth: "1999-06-17",
    },
    {
        id: 5,
        userName: "nghia.le",
        fullName: "Lê Văn Nghĩa",
        email: "nghia.le@example.com",
        phone: "+84 938765432",
        address: {
            street: "23 Võ Văn Kiệt",
            city: "Cần Thơ",
            country: "Việt Nam",
        },
        dateOfBirth: "1993-08-29",
    },
    {
        id: 6,
        userName: "haopham",
        fullName: "Phạm Văn Hào",
        email: "haopham@example.com",
        phone: "+84 972321678",
        address: {
            street: "67 Điện Biên Phủ",
            city: "Huế",
            country: "Việt Nam",
        },
        dateOfBirth: "1989-11-30",
    },
    {
        id: 7,
        userName: "ngocmai",
        fullName: "Võ Ngọc Mai",
        email: "ngocmai@example.com",
        phone: "+84 964781255",
        address: {
            street: "5 Lý Thường Kiệt",
            city: "Biên Hòa",
            country: "Việt Nam",
        },
        dateOfBirth: "2001-02-12",
    },
    {
        id: 8,
        userName: "quocdat",
        fullName: "Đinh Quốc Đạt",
        email: "quocdat@example.com",
        phone: "+84 973654789",
        address: {
            street: "77 Pasteur",
            city: "TP. Hồ Chí Minh",
            country: "Việt Nam",
        },
        dateOfBirth: "1997-10-08",
    },
    {
        id: 9,
        userName: "anhthu99",
        fullName: "Nguyễn Ánh Thư",
        email: "anhthu99@example.com",
        phone: "+84 934582176",
        address: {
            street: "4 Trường Chinh",
            city: "Hà Nội",
            country: "Việt Nam",
        },
        dateOfBirth: "1999-04-23",
    },
    {
        id: 10,
        userName: "minhvu",
        fullName: "Vũ Minh Khôi",
        email: "minhvu@example.com",
        phone: "+84 981234567",
        address: {
            street: "9 Nguyễn Thái Học",
            city: "Hải Phòng",
            country: "Việt Nam",
        },
        dateOfBirth: "1992-01-15",
    },
    {
        id: 11,
        userName: "tientran",
        fullName: "Trần Đức Tiến",
        email: "tientran@example.com",
        phone: "+84 936712845",
        address: {
            street: "15 Nguyễn Văn Linh",
            city: "Đà Nẵng",
            country: "Việt Nam",
        },
        dateOfBirth: "1996-05-19",
    },
    {
        id: 12,
        userName: "thuongho",
        fullName: "Hồ Thị Thương",
        email: "thuongho@example.com",
        phone: "+84 954872316",
        address: {
            street: "222 Lê Duẩn",
            city: "Huế",
            country: "Việt Nam",
        },
        dateOfBirth: "1998-11-07",
    },
    {
        id: 13,
        userName: "phucdao",
        fullName: "Đào Hữu Phúc",
        email: "phucdao@example.com",
        phone: "+84 938123654",
        address: {
            street: "68 Trần Phú",
            city: "Nha Trang",
            country: "Việt Nam",
        },
        dateOfBirth: "1995-07-01",
    },
    {
        id: 14,
        userName: "yenle",
        fullName: "Lê Hoài Yến",
        email: "yenle@example.com",
        phone: "+84 972456981",
        address: {
            street: "99 Nguyễn Trãi",
            city: "Hà Nội",
            country: "Việt Nam",
        },
        dateOfBirth: "2002-09-28",
    },
    {
        id: 15,
        userName: "hoangvu01",
        fullName: "Vũ Hoàng Anh",
        email: "hoangvu01@example.com",
        phone: "+84 965478213",
        address: {
            street: "41 Phan Chu Trinh",
            city: "Đà Lạt",
            country: "Việt Nam",
        },
        dateOfBirth: "1994-03-09",
    },
];

function App() {
    const [keyword, setKeyWord] = React.useState("");
    const [users, setUsers] = React.useState(usersSample);
    const [fecthData, setFecthData] = React.useState([]);
    const [result, setResult] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    //add user
    const [open, setOpen] = React.useState(false);
    const [newUser, setNewUser] = React.useState({
        id: -1,
        userName: "",
        fullName: "",
        email: "",
        phone: "",
        address: {
            street: "",
            city: "",
            country: "",
        },
        dateOfBirth: "",
    });

    const handleSearch = async () => {
        //loading
        setLoading(true);

        //fake data
        let data = [];

        try {
            await new Promise((r) => setTimeout(r, 2000));
            data = users;
            setFecthData(data);

            // filter
            const foundUser = data.filter(
                (e) =>
                    e.id.toString() === keyword ||
                    e.userName.toLowerCase() === keyword ||
                    e.fullName.toLowerCase() === keyword
            );
            if (!foundUser) {
                throw new Error("user not found");
            }
            setResult(foundUser);
        } catch (error) {
            console.log("error: ", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        if (!keyword) {
            alert("! Keyword is required");
            return;
        }
        handleSearch();
    };

    const handleChangeUserAddValue = (key, value) => {
        if (key in newUser) {
            setNewUser((prev) => ({ ...prev, [key]: value }));
        } else if (key in newUser.address) {
            setNewUser((prev) => ({
                ...prev,
                address: {
                    ...prev.address,
                    [key]: value,
                },
            }));
        }
    };

    const handleAddUser = () => {
        if (!newUser || newUser.userName?.length === 0) {
            alert("! new Username  is empty");
            return;
        }
        if (isEdit) {
            setUsers((prev) => {
                const filtered = prev.filter((u) => u.id !== newUser.id);
                const sorted = [...filtered, { ...newUser }].sort(
                    (a, b) => a.id - b.id
                );
                return sorted;
            });
            setIsEdit(false);
        } else {
            setUsers((prev) => [
                ...prev,
                {
                    ...newUser,
                    id: users.length + 1,
                },
            ]);
            alert("add user success");
        }

        setNewUser({
            id: -1,
            userName: "",
            fullName: "",
            email: "",
            phone: "",
            address: {
                street: "",
                city: "",
                country: "",
            },
            dateOfBirth: "",
        });
    };

    const handleEdit = (u) => {
        setIsEdit(true);
        setOpen(true);
        setNewUser(u);
    };
    const handleDelete = (u) => {
        setUsers((prev) => prev.filter((e) => e.id !== u.id));
    };
    return (
        <div>
            <SearchForm
                valu={keyword}
                onChangeValue={setKeyWord}
                handleSubmit={handleSubmit}
            />

            <div
                style={{
                    margin: 2,
                    border: "1px solid #ccc",
                    padding: 8,
                    borderRadius: 6,
                    width: "fit-content",
                    cursor: "pointer",
                }}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {" "}
                Thêm người dùng mới
            </div>
            <AddUser
                open={open}
                value={newUser}
                onChangeValue={handleChangeUserAddValue}
                onSubmit={handleAddUser}
            />

            {loading && <LoadingIndicator />}

            {result?.length > 0 && !loading && !error && (
                <ResultTable
                    results={result}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}

            <div
                style={{
                    margin: 2,
                    border: "1px solid #ccc",
                    padding: 8,
                    borderRadius: 6,
                    width: "fit-content",
                    cursor: "pointer",
                }}
            >
                {" "}
                Full data user
            </div>
            <ResultTable
                results={users}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
