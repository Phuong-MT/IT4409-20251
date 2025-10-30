import HeaderPage from "./header";

const LayoutPage = ({ Children }: { Children: React.ReactNode }) => {
    return (
        <div>
            <HeaderPage />
            {Children}
        </div>
    );
};

export default LayoutPage;
