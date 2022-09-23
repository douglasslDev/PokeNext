import { Footer } from "../footer";
import Header from "../header";
import * as Styled from "./styles";

const Layout= ({children}) => {
  return (
    <div>
        
     <Header/>
     <main>{children}</main>
     <Footer/>
     
    </div>
  );
};
export default  Layout ;
