import { useEffect, useState } from "react";
import type { Course, MergedResult, Result, Student } from "../types";
import SearchForm from "../component/form-search";
import LoadingIndicator from "../component/loading";
import ResultTable from "../component/result-table";

const Homepage = () => {
    const [studentId, setStudentId] = useState<string>("");
    const [results, setResults] = useState<MergedResult[]>([]);
    const [studentInfo, setStudentInfo] = useState<Student | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleSearch = (id: string) => {
        setStudentId(id);
    };

    useEffect(() => {
        if (!studentId) return;

        setIsLoading(true);
        setError("");
        setResults([]);
        setStudentInfo(null);

        setTimeout(async () => {
            try {
                const [svRes, hpRes, kqRes] = await Promise.all([
                    fetch("public/sinhvien.json"),
                    fetch("public/hocphan.json"),
                    fetch("public/ketqua.json"),
                ]);

                const [students, courses, scores]: [
                    Student[],
                    Course[],
                    Result[]
                ] = await Promise.all([
                    svRes.json(),
                    hpRes.json(),
                    kqRes.json(),
                ]);

                const foundStudent = students.find((s) => s.sid === studentId);
                if (!foundStudent) {
                    setError(`Not found mssv:  ${studentId}`);
                    setIsLoading(false);
                    return;
                }

                const studentResults = scores.filter(
                    (r) => r.sid === studentId
                );
                const merged: MergedResult[] = studentResults.map((r) => {
                    const course = courses.find((c) => c.cid === r.cid);
                    return {
                        ...r,
                        courseName: course ? course.name : "null",
                        credits: course ? course.credits : "-",
                    };
                });

                setStudentInfo(foundStudent);
                setResults(merged);
            } catch (err) {
                setError("Fetch data error");
            } finally {
                setIsLoading(false);
            }
        }, 2000);
    }, [studentId]);

    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "40px auto",
                textAlign: "center",
            }}
        >
            <h1>Tra cuu ket qua hoc tap</h1>
            <SearchForm onSearch={handleSearch} />

            {isLoading && <LoadingIndicator />}

            {error && (
                <p style={{ color: "red", fontWeight: "600" }}>{error}</p>
            )}

            {!isLoading && studentInfo && results.length > 0 && (
                <ResultTable student={studentInfo} results={results} />
            )}
        </div>
    );
};

export default Homepage;
