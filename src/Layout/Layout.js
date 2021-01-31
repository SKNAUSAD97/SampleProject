import react, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Layout extends Component{
    render(){
        return(
            <>
                <Header />
                {this.props.children}
                <Footer />
            </>
        );
    };
}
export default Layout;