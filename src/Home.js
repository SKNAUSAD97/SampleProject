import React, { Component } from "react";
import Layout from './Layout/Layout';
import Intro from './Component/Intro';
import Description from "./Component/Description";
import Services from "./Component/Services";
import Details from "./Component/Details";
import Details2 from "./Component/Details2";
import Testimonials from "./Component/Testimonials";
import CallMe from "./Component/CallMe";
import Projects from "./Component/Projects";
import LightBoxes from "./Component/LightBoxes";
import OurTeam from "./Component/OurTeam";
import About from "./Component/About";
class Home extends Component{
    render(){
        return(
            <>
                
                    <Layout>
                    <body data-spy="scroll" data-target=".fixed-top">
                    <Intro />
                    <Description />
                    <Services />
                    <Details />
                    <Details2 />
                    <Testimonials />
                    <CallMe />
                    <Projects />
                    <LightBoxes />
                    <OurTeam />
                    <About />
                    </body>
                    </Layout>
                    
            </>
        );
    };
}

export default Home;