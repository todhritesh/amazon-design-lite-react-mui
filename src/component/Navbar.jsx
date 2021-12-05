import { Fragment } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    CardMedia,
    Grid,
    Typography,
    TextField,
    FormControl,
    Select,
    MenuItem,
    Stack,
    InputLabel,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles({
   
})

export default function Navbar(){

    const classes = useStyles()
    return (
        <Fragment>
            <AppBar positon="sticky" sx={{backgroundColor:'black'}}>
                <Toolbar sx={{display:'flex',justifyContent:'center'}}>
                    <IconButton>
                       <Box  sx={{width:"140px",}}>
                        <CardMedia
                            image={process.env.PUBLIC_URL+"/images/logo.png"}
                            height="60"
                            component="img"
                            sx={{objectFit:'contain'}}
                            />
                       </Box>
                    </IconButton>

                    <IconButton>
                       <Box  sx={{width:"160px",}}>
                            <Grid container  spacing={3}>
                                <Grid item xs={2}>
                                    <IconButton>
                                        <LocationOnIcon sx={{color:'white'}} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="caption" size="small" sx={{color:'#FFFFFF'}}>Delivered to Dhritesh</Typography>
                                    <Typography variant="body2" size="small" color="white">Purnea 854301</Typography>
                                </Grid>
                            </Grid>
                       </Box>
                    </IconButton>

                    <Box sx={{borderRadius:4, border:1,borderWidth:3, borderColor:'orange',pr:1}}>
                        <FormControl fullWidth>
                            <Stack sx={{display:"flex",alignItems:'center',m:0}} direction="row" spacing={0}>
                                <Box >
                                    <InputLabel sx={{color:"white"}}>All</InputLabel>
                                    <Select sx={{color:"white"}} label="All" >
                                        <MenuItem value="Item1">Item1</MenuItem>
                                        <MenuItem value="Item2">Item2</MenuItem>
                                        <MenuItem value="Item3">Item3</MenuItem>
                                        <MenuItem value="Item4">Item4</MenuItem>
                                        <MenuItem value="Item5">Item5</MenuItem>
                                    </Select>
                                </Box>
                                <Box>
                                    <TextField variant='outlined' size="small" placeholder="Search here..." sx={{bgcolor:"white",width:450}} ></TextField>
                                </Box>
                                <Box sx={{bgcolor:"orange"}}>
                                    <IconButton >
                                        <SearchIcon sx={{color:'black'}}/>
                                    </IconButton>
                                </Box>
                            </Stack>
                        </FormControl>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:"sapce-evenly"}}>
                    <IconButton sx={{pl:2}}>
                            <Grid container >
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" size="small" sx={{color:'#FFFFFF'}}>IND</Typography>
                                </Grid>
                            </Grid>
                    </IconButton>

                    <IconButton>
                            <Grid container >
                                <Grid item xs={12}>
                                    <Typography variant="caption" size="small" sx={{color:'#FFFFFF'}}>Hello Dhritesh</Typography>
                                    <Typography variant="body2" size="small" color="white">Accounts and lists</Typography>
                                </Grid>
                            </Grid>
                    </IconButton>

                    <IconButton>
                            <Grid container >
                                <Grid item xs={12}>
                                    <Typography variant="caption" size="small" sx={{color:'#FFFFFF'}}>Returns</Typography>
                                    <Typography variant="body2" size="small" color="white">and orders</Typography>
                                </Grid>
                            </Grid>
                    </IconButton>

                    <IconButton>
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <IconButton>
                                        <ShoppingCartIcon  sx={{color:'white',fontSize:'40px'}} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={10} sx={{mt:'auto' , pr:2}}>
                                    <Typography variant="body2" size="small" sx={{color:'#FFFFFF'}}>Cart</Typography>
                                </Grid>
                            </Grid>
                    </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

