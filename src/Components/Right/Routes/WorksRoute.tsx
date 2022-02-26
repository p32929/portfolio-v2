import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Button, Divider, Grid, Theme} from "@material-ui/core";
import {useActions, useAppState} from '../../../Overmind/OvermindHelper';
import {GlobalVars, myGithubUsername} from '../../../Others/GlobalVars';
import ListItemWithIcon from '../../Items/ListItemWithIcon';
import {OurIcons} from "../../../Others/OurIcons";
import {WebImages} from "../../../Others/Images";

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

interface GithubResp {
    name: string;
    html_url: string;
    description: string;
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const WorksRoute: React.FC<Props> = (props) => {
    const {} = useActions()
    const {} = useAppState()
    const [works, setWorks] = useState([])
    const classes = useStyles();

    useEffect(async () => {
        if (myGithubUsername) {
            const ab = await fetch(`https://api.github.com/users/${myGithubUsername}/repos?per_page=999`)
            const json: Array<GithubResp> = await ab.json()

            var newWorks = [
                ...GlobalVars.works
            ]
            var newWOrkObj = {
                text: "Github repositories",
                arr: []
            }

            for (var i = 0; i < json.length; i++) {
                const obj = json[i]
                newWOrkObj.arr.push({
                    title: obj.name,
                    logo: WebImages.giftIcon,
                    desc: obj.description ?? "Lots of amazingness",
                    link: obj.html_url
                })
            }
            newWorks.push(newWOrkObj)
            setWorks(newWorks)
        }

    }, [])

    const getWorks = () => {
        if (works.length > 0) {
            return works
        } else {
            return GlobalVars.works
        }
    }

    return <Grid container xs={12} item direction='row'>
        {
            getWorks().map((item, index) => {
                return <ListItemWithIcon key={index} item={item}/>
            })
        }
    </Grid>

}

export default WorksRoute;