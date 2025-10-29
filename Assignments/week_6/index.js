const sinhVienSample = [
    { sid: "20225381", name: "Truong Minh Phuong", dob: "2004-12-16" },
    { sid: "20221234", name: "Nguyen Van A", dob: "2003-10-12" },
    { sid: "20224567", name: "Le Thi B", dob: "2004-03-20" },
];

const hocPhanSample = [
    { cid: "IT3070", name: "Nguyen ly he dieu hanh", credits: 3 },
    { cid: "PE2501", name: "Cau long 1", credits: 0 },
    { cid: "PH1110", name: "Vat ly dai cuong 1", credits: 3 },
    { cid: "IT3120", name: "Phan tich va thiet ke he thong", credits: 2 },
    { cid: "IT3170", name: "Thuat toan ung dung", credits: 2 },
    { cid: "PE2401", name: "Bong ban 1", credits: 0 },
    { cid: "IT4651", name: "Thiet ke va trien khai mang IP", credits: 3 },
    { cid: "SSH1141", name: "Lich su dang cong san Viet Nam", credits: 2 },
    { cid: "IT4015", name: "Nhap mon an toan thong tin", credits: 3 },
    { cid: "IT3931", name: "Project II", credits: 2 },
    { cid: "IT4060", name: "Lap trinh mang", credits: 2 },
    { cid: "IT3040", name: "Ky thuat lap trinh", credits: 2 },
    {
        cid: "EM1180",
        name: "Van hoa kinh doanh va tinh than khoi nghiep",
        credits: 2,
    },
    { cid: "IT3090", name: "Co so du lieu", credits: 3 },
    { cid: "IT3150", name: "Project I", credits: 2 },
    { cid: "IT4172", name: "Xu ly tin hieu", credits: 2 },
    { cid: "IT3080", name: "Mang may tinh", credits: 3 },
    { cid: "IT3180", name: "Nhap mon cong nghe phan mem", credits: 3 },
    { cid: "IT4593", name: "Nhap mon ky thuat truyen thong", credits: 2 },
];

const ketquaSample = [
    {
        sid: "20225381",
        cid: "IT3070",
        term: "2024.2",
        score: ["QT: 7.0", "CK: 5.5"],
        grade: "C",
    },
    {
        sid: "20225381",
        cid: "PE2501",
        term: "2024.2",
        score: ["CK: 9.0"],
        grade: "A+",
    },
    {
        sid: "20225381",
        cid: "PH1110",
        term: "2024.2",
        score: ["QT: 8.5", "CK: 6.5", "TN/TH: 6.5"],
        grade: "B",
    },
    {
        sid: "20225381",
        cid: "IT3120",
        term: "2024.2",
        score: ["QT: 8.0", "CK: 6.0"],
        grade: "C+",
    },
    {
        sid: "20225381",
        cid: "IT3170",
        term: "2024.2",
        score: ["QT: 10.0", "CK: 5.5"],
        grade: "B",
    },
    {
        sid: "20225381",
        cid: "PE2401",
        term: "2024.2",
        score: ["CK: 6.0"],
        grade: "C",
    },
    {
        sid: "20225381",
        cid: "IT4651",
        term: "2024.2",
        score: ["QT: 6.5", "CK: 8.0"],
        grade: "B",
    },
    {
        sid: "20225381",
        cid: "SSH1141",
        term: "2024.2",
        score: ["QT: 9.0", "CK: 7.0"],
        grade: "B+",
    },
    {
        sid: "20225381",
        cid: "IT4015",
        term: "2024.2",
        score: ["QT: 7.5", "CK: 5.0"],
        grade: "C",
    },
    {
        sid: "20225381",
        cid: "IT3931",
        term: "2024.2",
        score: ["QT: 9.5", "CK: 10.0"],
        grade: "A+",
    },
    {
        sid: "20225381",
        cid: "IT4060",
        term: "2024.2",
        score: ["QT: 9.0", "CK: 8.0"],
        grade: "B+",
    },
    {
        sid: "20221234",
        cid: "IT3040",
        term: "2024.1",
        score: ["QT: 7.0", "CK: 6.5", "TN/TH: 8.5"],
        grade: "C+",
    },
    {
        sid: "20221234",
        cid: "EM1180",
        term: "2024.1",
        score: ["QT: 9.0", "CK: 8.0"],
        grade: "A",
    },
    {
        sid: "20221234",
        cid: "IT3090",
        term: "2024.1",
        score: ["QT: 8.0", "CK: 8.0", "TN/TH: 8.0"],
        grade: "B+",
    },
    {
        sid: "20221234",
        cid: "IT3150",
        term: "2024.1",
        score: ["QT: 10.0", "CK: 9.5"],
        grade: "A+",
    },
    {
        sid: "20221234",
        cid: "IT4172",
        term: "2024.1",
        score: ["QT: 7.5", "CK: 7.5"],
        grade: "B",
    },
    {
        sid: "20221234",
        cid: "IT3080",
        term: "2024.1",
        score: ["QT: 8.0", "CK: 5.5", "TN/TH: 8.5"],
        grade: "C+",
    },
    {
        sid: "20221234",
        cid: "IT3180",
        term: "2024.1",
        score: ["QT: 9.0", "CK: 7.0"],
        grade: "B",
    },
    {
        sid: "20221234",
        cid: "IT4593",
        term: "2024.1",
        score: ["QT: 10.0", "CK: 8.0"],
        grade: "A",
    },
];

async function fakeFetch(key) {
    const data = key;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data;
}

function renderResult(data) {
    const resultBody = document.getElementById("result-body");
    resultBody.innerHTML = "";
    data.forEach((d) => {
        const row = `
      <tr>
        <td>${d.cid}</td>
        <td>${d.name}</td>
        <td>${d.credits}</td>
        <td>${d.term}</td>
        <td>${d.score}</td>
        <td>${d.letter}</td>
      </tr>`;
        resultBody.innerHTML += row;
    });
}

document.getElementById("search-btn").addEventListener("click", async () => {
    const sid = document.getElementById("sid-input").value.trim();
    const statusEl = document.getElementById("status");
    const resultBody = document.getElementById("result-body");
    resultBody.innerHTML = "";

    if (!sid) {
        statusEl.innerHTML = "<p class='error'>MSSV is required</p>";
        return;
    }

    const cache = localStorage.getItem(`ketqua_${sid}`);
    if (cache) {
        const cachedData = JSON.parse(cache);
        statusEl.innerHTML = "<p class='sucess'>fetch data to catch</p>";
        renderResult(cachedData);
        return;
    }

    try {
        statusEl.innerHTML = "<p class='loading'>loading...</p>";

        const [sinhvien, hocphan, ketqua] = await Promise.all([
            fakeFetch(sinhVienSample),
            fakeFetch(hocPhanSample),
            fakeFetch(ketquaSample),
        ]);

        const sv = sinhvien.find((s) => s.sid === sid);
        if (!sv) throw new Error("MSSV not found");

        const results = ketqua.filter((k) => k.sid === sid);
        if (results.length === 0) throw new Error("Not result");

        const fullData = results.map((r) => {
            const hp = hocphan.find((h) => h.cid === r.cid);
            return {
                cid: r.cid,
                name: hp ? hp.name : "",
                credits: hp ? hp.credits : 0,
                term: r.term,
                score: r.score,
                letter: r.grade,
            };
        });

        localStorage.setItem(`ketqua_${sid}`, JSON.stringify(fullData));

        statusEl.innerHTML = `SV: <b>${sv.name}</b> (DOB: ${sv.dob})`;
        renderResult(fullData);
    } catch (err) {
        statusEl.innerHTML = `<p class='error'>${err.message}</p>`;
    }
});
