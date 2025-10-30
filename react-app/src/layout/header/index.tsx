import "./index.css";
import logoAppWeek4 from "@/assets/image/logo-app.png";
import logoApp from "@/assets/image/Logobk.2a30b706.png";

const HeaderPage = () => {
    return (
        <header>
            <div className="header">
                <div className="head">
                    <div>
                        <img src={logoApp} alt="bkhn" loading="lazy" />
                    </div>
                    <div className="logo-app">
                        <img src={logoAppWeek4} alt="bk-ict" />
                        <div>
                            <p>xin chao</p>
                            <p>Truong Minh Phuong</p>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <a href="#trang-chu"> TRANG CHU </a>
                    <a href="#ngoai-khoa"> NGOAI KHOA </a>
                    <a href="#huong-nghiep"> HUONG NGHIEP </a>
                    <a href="#hoc-bong"> HOC BONG </a>
                    <a href="#cham-diem"> CHAM DIEM </a>
                    <a href="#hanh-chinh"> HANH CHINH </a>
                    <a href="#tan-sv"> TAN SINH VIEN </a>
                    <a href="#ho-so"> HO SO </a>
                </div>
            </div>
        </header>
    );
};

export default HeaderPage;
