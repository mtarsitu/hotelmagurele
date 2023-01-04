import Confidentialitate from "../../src/components/FotterLinks/confidentialitate";
import Cookies from "../../src/components/FotterLinks/cookies";
import TermeneSiConditii from "../../src/components/FotterLinks/termene";

function FooterLinks(props) {
    switch (props.route) {
        case "termene-si-conditii":
            return (<TermeneSiConditii />);
        case "politica-de-confidentialitate":
            return (<Confidentialitate />);
        case "politica-de-cookieuri":
            return (<Cookies />);
        default:
            return ("unkown");
    };
};

export default FooterLinks;