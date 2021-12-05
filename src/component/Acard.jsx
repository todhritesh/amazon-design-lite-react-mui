import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';


export default function Acard(){
    return (
        <Fragment>
            <Paper maxWidth="100%" minHeight="380px" square elevation={10} component={Box} sx={{p:2,mb:2}}>
                <CardHeader
                avatar={
                    <Avatar
                     sx={{bgcolor:'grey'}}
                     >
                        D
                    </Avatar>
                }
                title={
                    <Typography variant="h6">Hi , Dhritesh</Typography>
                }
                subheader="customer since 2018"
                />
                <Typography sx={{fontWeight:'bold'}} variant="caption">Top links for you</Typography>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img sx={{objectFit:'content',}} width='80%' src={process.env.PUBLIC_URL + "/images/image.jpg"} />
                            <Typography component="p" variant="caption">Item 1</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img sx={{objectFit:'content',}} width='80%' src={process.env.PUBLIC_URL + "/images/downlaod1.jpg"} />
                            <Typography component="p" variant="caption">item 2</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img sx={{objectFit:'content',}} width='80%' src={process.env.PUBLIC_URL + "/images/downlaod1.jpg"} />
                            <Typography component="p" variant="caption">Item 3</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img sx={{objectFit:'content',}} width='80%' src={process.env.PUBLIC_URL + "/images/image.jpg"} />
                            <Typography component="p" variant="caption">Item 4</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Paper>
        </Fragment>
    )
}