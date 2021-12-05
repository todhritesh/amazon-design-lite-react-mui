import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import Acard from "./Acard";
import Ncard from "./Ncard";


export default function CardContainer(){
    return (
       <Box sx={{width:"100%",pt:10,bgcolor:'#e8e4e9'}}>
           <Grid container spacing={4} justifyContent="space-evenly">
               <Grid item xs={3}>
                    <Acard/>
               </Grid>
               <Grid item xs={3}>
                    <Ncard/>    
               </Grid>
               <Grid item xs={3}>
                    <Ncard/>
               </Grid>
               <Grid item xs={3}>
                     <Ncard/>
               </Grid>
           </Grid>
           <Grid container spacing={4} justifyContent="space-evenly">
                
               <Grid item xs={6}>
                    <Paper maxWidth="100%"  square elevation={10} component={Box} sx={{mb:2}}>
                        <img width="100%" height="385px" src={process.env.PUBLIC_URL + "/images/movie.jpg"} />
                    </Paper>
                </Grid>
               <Grid item xs={3}>
                    <Ncard/>
               </Grid>
               <Grid item xs={3}>
                     <Ncard/>
               </Grid>
           </Grid>
           
       </Box>
    )
}