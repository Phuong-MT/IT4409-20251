const headerSemester = document.querySelectorAll(".semester-header");

// popup semester
headerSemester.forEach((header) => {
    const semesterTitle = header.querySelector(".semester-title");
    const targetId = header.dataset.target;
    const body = document.getElementById(targetId);

    if (!semesterTitle || !body) {
        return;
    }

    semesterTitle.addEventListener("click", () => {
        const isOpen = body.classList.toggle("show");
        header.classList.toggle("open", isOpen);
        if (isOpen) {
            Array.from(body.querySelectorAll("tr")).forEach((tr) => {
                tr.style.display = "";
            });
        }
    });
});
// filter highlight

const ButtonAction = {
    Highlight: "Highlight",
    Sort: "Sort",
    Filter: "Filter",
    Average: "Average",
};
class GradesProps {
    grade;
    value;
}
const Grades = [
    { grade: "A+", value: 4.0 },
    { grade: "A", value: 4.0 },
    { grade: "B+", value: 3.5 },
    { grade: "B", value: 3.0 },
    { grade: "C+", value: 2.5 },
    { grade: "C", value: 2.0 },
    { grade: "D+", value: 1.5 },
    { grade: "D", value: 1.0 },
    { grade: "F", value: 0 },
];

headerSemester.forEach((header) => {
    const classNameHeader = header.className;
    const targetId = header.dataset.target;
    const isOpen = classNameHeader.includes("open");

    if (!targetId || !isOpen) return;

    const data = document.getElementById(targetId);
    const rows = Array.from(data.querySelectorAll("tr"));

    const buttonAction = header.querySelectorAll(".btn-semester");
    buttonAction.forEach((button) => {
        const classNameButton = button.className;

        if (classNameButton.includes("highlight")) {
            button.addEventListener("click", () => {
                rows.forEach((row) => {
                    const grade = row.lastElementChild.textContent.trim();
                    if (["A", "A+", "F"].includes(grade)) {
                        row.style.backgroundColor =
                            grade === "F" ? "#333" : "#597EF7";
                        setTimeout(() => {
                            row.style.backgroundColor = "";
                        }, 5000);
                    }
                });
                console.log("Highlight A, A+, F");
            });
        } else if (classNameButton.includes("sort")) {
            button.addEventListener("click", () => {
                const sorted = [...rows].sort((a, b) => {
                    const gradeA = a.lastElementChild.textContent.trim();
                    const gradeB = b.lastElementChild.textContent.trim();

                    const indexA = Grades.findIndex((e) => e.grade === gradeA);
                    const indexB = Grades.findIndex((e) => e.grade === gradeB);

                    const safeA = indexA === -1 ? Grades.length : indexA;
                    const safeB = indexB === -1 ? Grades.length : indexB;
                    return safeA - safeB;
                });
                sorted.forEach((r) => data.appendChild(r));
                console.log("Sorted by score (desc)");
            });
        } else if (classNameButton.includes("filter")) {
            button.addEventListener("click", () => {
                rows.forEach((row) => {
                    const grade = row.lastElementChild.textContent.trim();
                    if (["A", "A+"].includes(grade)) {
                        row.style.display = "";
                    } else {
                        row.style.display = "none";
                    }
                });
                console.log("Filter A, A+");
            });
        } else if (classNameButton.includes("average")) {
            button.addEventListener("click", () => {
                const gradesAndTC = rows.map((row) => {
                    return {
                        grade: row.lastElementChild.textContent.trim(),
                        tc: Number(row.children[3].textContent.trim() || 0),
                    };
                });
                const scores = gradesAndTC.map(({ grade, tc }) => {
                    return {
                        value:
                            Grades.find((e) => e.grade === grade)?.value ?? 0,
                        tc,
                    };
                });

                if (scores.length === 0) return alert("null");
                const totalTC = scores.reduce((sum, s) => sum + s.tc, 0);
                const totalWeighted = scores.reduce(
                    (sum, s) => sum + s.value * s.tc,
                    0
                );

                const avg = (totalWeighted / totalTC).toFixed(2);

                alert(`GPA: ${avg}`);
                console.log("Average score (weighted GPA):", avg);
            });
        }
    });
});
