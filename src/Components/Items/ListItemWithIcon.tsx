import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { TitledListItemInterface } from '../../Others/Interfaces';
import ListTitle from './ListTitle';
import OurListItem from './OurListItem';

interface Props {
    item: TitledListItemInterface
}

const getThemeObj = (theme: Theme) => {
    return {
        root: {
            marginTop: 4,
            marginLeft: 8,
            marginBottom: 16,
        },
        itemRoot: {
            marginTop: 8
        }
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const ListItemWithIcon: React.FC<Props> = (props) => {
    const { } = useActions()
    const { } = useAppState()
    const { item } = props
    const { text, arr } = item

    const classes = useStyles();

    return <Grid container direction='column' className={classes.root}>
        <ListTitle title={text} />
        <Grid container direction='row' className={classes.itemRoot}>
            {
                arr.sort((a, b) => a.title.localeCompare(b.title)).map((arrItem, index) => {
                    return <OurListItem key={index} item={arrItem} />
                })
            }
        </Grid>
    </Grid>

}

export default ListItemWithIcon;