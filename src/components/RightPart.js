import React from 'react';
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import Button from "@material-ui/core/Button";

const styles = {
    divider: {
        height: 1,
        width: 200,
        marginLeft: -8,
        marginTop: 8
    },
    listGridParent: {
        minHeight: 500,
        maxHeight: 500,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflowY: 'auto',
    }
}

const arr = [
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
]

const RightPart = () => {
    return (
        <Grid style={{paddingRight: 16}} container xs={9} item direction='column' justify='flex-start'>
            <Grid style={{paddingTop: 16,}} container direction='row' justify={"space-between"}>
                <Button disabled style={{color: "#212121"}}>
                    CURRENT ROUTE
                </Button>

                <Button href='https://github.com/p32929/p32929.github.io/'>
                    MAKE YOUR OWN PORTFOLIO
                </Button>

            </Grid>

            <Grid spacing={2} style={styles.listGridParent} container direction='row'>
                {
                    arr.map(item => {
                        return <CardItem/>
                    })
                }
            </Grid>

        </Grid>
    );
};

export default RightPart;