import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../Overmind/OvermindHelper';

interface Props {
    size: number,
    path: string,
    styles?: any,
}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const SvgHelper: React.FC<Props> = (props) => {
    const { } = useActions()
    const { primaryColor } = useAppState()

    const classes = useStyles();
    const { path, size, styles } = props

    return <svg style={{ width: size, height: size, ...styles }} viewBox="0 0 24 24">
        <path fill={primaryColor}
            d={path} />
    </svg>
}

export default SvgHelper;