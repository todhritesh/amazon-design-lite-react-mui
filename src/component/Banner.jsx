import { Box } from '@mui/system'
import {Fragment} from 'react';
import CardContainer from './CardContainer'

export default function Banner () {
    return (
        <Fragment>
            <Box  id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" sx={{width:"100%"}} >
            {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"> */}
                <div class="carousel-inner">
                    <div  class="carousel-item active">
                    <img sx={{objectFit:'contain'}} height="500px" src={process.env.PUBLIC_URL + "/images/downlaod1.jpg"} class="d-block w-100" alt="..."/>
                    </div>
                    <div  class="carousel-item">
                    <img sx={{objectFit:'contain'}} height="500px" src={process.env.PUBLIC_URL + "/images/downlaod2.png"} class="d-block w-100" alt="..."/>
                    </div>
                    <div  class="carousel-item">
                    <img sx={{objectFit:'contain'}} height="500px" src={process.env.PUBLIC_URL + "/images/downlaod3.jpg"} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            {/* </div> */}

            <CardContainer/>
            </Box>
        </Fragment>
    )
}