import React from 'react';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/ToolBar';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AppBar from '@material-ui/core/AppBar';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import Container from '@material-ui/core/Container';

const Galery = () => {
    return ( 
        <div >
            {/* <Typography variant="h1" component="h2">
                سلامممم
            </Typography> */}

            <CssBaseLine/>
            <AppBar position="relative">
                <ToolBar>
                    <PhotoCameraIcon/>
                    <Typography variant="h6">
                        گالری تصاویر
                    </Typography>
                </ToolBar>

            </AppBar>
            <div>
                <Container maxWidth="sm">
                    <Typography    variant="h5"
              align="center"
              color="textSecondary"
              pargraph>
                        گالری تصاویر
                    </Typography>
                    <Typography variant="h3">
                        ************************************
                        ********************************
                        ****************************گالری تصاویر
                    </Typography>
                </Container>
            </div>
        </div>
    
    );
}
 
export default Galery;