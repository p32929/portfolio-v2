import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../Utils/OvermindHelper";
import IconButton from "@material-ui/core/IconButton";
import SvgHelper from "../Helpers/SvgHelper";

const TopRightButtons = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid item>
            {/*
            PLEASE, DON'T CHANGE THIS GITHUB URL.
            ( https://github.com/p32929/p32929.github.io/ )

            YOU MAY USE THE SOURCE CODE HOWEVER YOU WANT, BUT PLEASE,
            KEEP THE FORK-ICON & the GITHUB-URL under the icon UNCHANGED,
            SO THAT OTHERS CAN ALSO BENIFIT FROM THE ORIGINAL REPOSITORY.
            THANKS... :)
            */}

            <IconButton size='small' target="_blank" href='https://github.com/p32929/p32929.github.io/'>
                <SvgHelper
                    path='M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z'
                    styles={{padding: 8}}
                    size={36}/>
            </IconButton>

            <IconButton size='small' onClick={() => {
                actions.setShowColorPickerDialog(!state.showColorPickerDialog)
            }}>
                <SvgHelper
                    path='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    styles={{padding: 8}}
                    size={36}/>
            </IconButton>
        </Grid>
    );
};

export default TopRightButtons;
