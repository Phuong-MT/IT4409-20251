import HomePage from "./home";
import LayoutPage from "../layout";
import HomepageV2 from "./homeV2";
const Pages = () => {
    // home v1
    // return <LayoutPage Children={<HomePage />} />;

    //home v2
    return <LayoutPage Children={<HomepageV2 />} />;
};
export default Pages;
