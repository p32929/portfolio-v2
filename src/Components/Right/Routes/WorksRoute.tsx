import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../../Overmind/OvermindHelper';
import { GlobalVars } from '../../../Others/GlobalVars';
import ListItemWithIcon from '../../Items/ListItemWithIcon';
import { OurIcons } from "../../../Others/OurIcons";
import { WebImages } from "../../../Others/Images";
import { TitledListItemInterface } from "../../../Others/Interfaces";

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
    const { } = useActions()
    const { } = useAppState()
    const [works, setWorks] = useState<Array<TitledListItemInterface>>([])
    const classes = useStyles();

    // const getGithubRepos = async () => {
    //     console.debug(`getGithubRepos`)
    //     const data = await fetch(`https://api.github.com/users/${GlobalVars.myGithubUsername}/repos?per_page=999`)
    //     const jsonFromFetch = await data.json()
    //     const json: Array<GithubResp> = jsonFromFetch

    //     var newWorks: Array<TitledListItemInterface> = [
    //         ...getWorks()
    //     ]
    //     var newWOrkObj: TitledListItemInterface = {
    //         text: "Others",
    //         arr: []
    //     }

    //     for (var i = 0; i < json.length; i++) {
    //         const obj = json[i]
    //         newWOrkObj?.arr?.push({
    //             title: obj.name,
    //             logo: WebImages.giftIcon,
    //             desc: obj.description,
    //             link: obj.html_url
    //         })
    //     }
    //     newWorks.push(newWOrkObj)
    //     setWorks(newWorks)
    // }

    const addFeaturedItems = () => {
        const featuredItems: TitledListItemInterface = {
            text: "Featured",
            arr: [],
        }
        for (var i = 0; i < getWorks().length; i++) {
            for (var j = 0; j < getWorks()[i].arr.length; j++) {
                if (getWorks()[i].arr[j]?.featured) {
                    featuredItems.arr.push(getWorks()[i].arr[j])
                }
            }
        }
        var newWorks: Array<TitledListItemInterface> = [
            featuredItems,
            ...getWorks(),
        ]
        setWorks(newWorks)
    }

    useEffect(() => {
        addFeaturedItems()
    }, [])

    const getWorks = () => {
        if (works.length > 0) {
            return works
        } else {
            return GlobalVars.works
        }
    }

    return <Grid container xs={12} item direction='column'>
        {
            getWorks().map((item, index) => {
                return <ListItemWithIcon key={index} item={item} />
            })
        }
    </Grid>

}

export default WorksRoute;