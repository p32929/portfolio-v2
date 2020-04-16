import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {Switch, useLocation} from "react-router-dom";
import About from "../routesComponents/About";
import Contact from "../routesComponents/Contact";
import Skills from "../routesComponents/Skills";
import Projects from "../routesComponents/Projects";
import Route from "react-router-dom/es/Route";
import Blogs from "../routesComponents/Blogs";

const styles = {
    upperPart: {
        padding: 16,
    },
    divider: {
        height: 1,
        width: 200,
        marginTop: 8,
        backgroundColor: '#CDDC39'
    },
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    currentRoute: {
        color: "#212121",
        fontSize: 14,
        fontWeight: 'bold'
    }
}

const arr = [
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
]

const routerComponents = [
    <About/>,
    <Skills/>,
    <Projects/>,
    <Contact/>,

]

const RightPart = (props) => {
    let location = useLocation();
    console.log(location.pathname);

    return (

        <Grid style={{height: '100%'}} container xs item direction='row' alignContent='flex-start'>
            <Grid style={styles.upperPart} container direction='row'>
                <Grid>
                    <Button disabled style={styles.currentRoute}>
                        {
                            location.pathname.replace("/", "")
                        }
                    </Button>
                    <Divider orientation="horizontal" style={styles.divider} flexItem/>
                </Grid>
            </Grid>

            <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/blogs" component={Blogs}/>
            </Switch>
        </Grid>
    );
};

export default RightPart;