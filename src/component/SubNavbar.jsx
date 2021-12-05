import { AppBar, IconButton, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { Fragment } from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    textColor : {
        color:'white',
    }
})

export default function SubNavbar(){
    const classes = useStyles();
    return (
        <Fragment>
            <AppBar position="static" sx={{mt:9,bgcolor:'#232f3e',color:'white'}}>
                <Toolbar>
                    <Stack direction="row" sx={{flexGrow:1}} spacing={1}>
                        <IconButton >
                            <MenuIcon className={classes.textColor}/>
                            <Typography variant="body2" pl={1} className={classes.textColor}>All</Typography>
                        </IconButton>
                        <IconButton>
                            <Typography variant="caption"  className={classes.textColor}>Fresh</Typography>
                        </IconButton>
                        <IconButton>
                            <Typography variant="caption"  className={classes.textColor}>Gift card</Typography>
                        </IconButton>
                        <IconButton>
                            <Typography variant="caption"  className={classes.textColor}>Amazon pay</Typography>
                        </IconButton>
                        <IconButton>
                            <Typography variant="caption"  className={classes.textColor}>Gift ideas</Typography>
                        </IconButton>
                        <IconButton>
                            <Typography variant="caption"  className={classes.textColor}>Kindle eBooks</Typography>
                        </IconButton>
                        <IconButton>
                            <Typography variant="caption"  className={classes.textColor}>Browsing history</Typography>
                        </IconButton>
                        <IconButton>
                            <Typography variant="caption"  className={classes.textColor}>Buy again</Typography>
                        </IconButton>
                    </Stack>
                    <Box>
                        <IconButton>
                            <Typography  className={classes.textColor} variant="h6">Join prime</Typography>
                            <Typography  className={classes.textColor} variant="h6">At Rs. 999/year</Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}