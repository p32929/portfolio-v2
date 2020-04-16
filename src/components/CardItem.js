import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
    parent: {
        padding: 12,
        margin: 8,
        borderRadius: 6,
    },
    media: {
        height: 156,
        borderRadius: 6,
    },
    divider: {
        height: 1,
        marginTop: 8
    }
}

const CardItem = (props) => {
    return (
        <Grid item xs={4}>
            <Card style={styles.parent}>
                <CardMedia
                    style={styles.media}
                    image={
                        'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
                    }
                />
                <Grid style={{paddingTop: 16}} container direction='column'
                      justify='center' alignItems='stretch' alignContent='stretch'>

                    <Typography style={{color: '#212121'}}>Animal Lover</Typography>
                    <Typography style={{fontSize: 14, color: "#757575"}} variant='inherit'>A collection of animals
                        pictures, videos with education description</Typography>
                    <Button style={{marginTop: 16}}>Download</Button>
                </Grid>
            </Card>
        </Grid>
    );
};

export default CardItem;