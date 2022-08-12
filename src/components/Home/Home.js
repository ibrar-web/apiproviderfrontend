import React from 'react'
import { styled } from '@mui/material/styles';
import Navbar from '../Navbar/Navbar'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from  '@mui/material/Container';
import './Home.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
export default function Home() {
    return (
        <>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, ml: 20 }}>
                {/* <DrawerHeader /> */}
                <Container>

                <Grid container spacing={40}>
                    <Grid item xs={2} md={2}>
                        <Card className="Card" sx={{ minWidth: 240, background: 'linear-gradient(to right bottom, #267191, #54ba98)' }}>
                            <CardContent>
 
                                <Typography variant="h5" component="div" color="white">
                                    100
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="white">
                                    Partners
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" sx={{  
                                    backgroundColor:'white'
                                }}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2} >
                    <Card className="Card" sx={{ minWidth: 240, background: 'linear-gradient(to right bottom, #00bbff, #e7f7a1)' }}>
                            <CardContent>
 
                                <Typography variant="h5" component="div" color="white">
                                    10000 +
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="white">
                                    Users
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"  sx={{  
                                    backgroundColor:'white'
                                }}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2} >
                    <Card className="Card" sx={{ minWidth: 240, background: 'linear-gradient(to right bottom, #0099ff, #00fff2)' }}>
                            <CardContent>
 
                                <Typography variant="h5" component="div" color="white">
                                    500 $
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="white">
                                    Amount
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" sx={{  
                                    backgroundColor:'white'
                                }}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2} sm={12} >
                    <Card className="Card" sx={{ minWidth: 240, background: 'linear-gradient(to right bottom, #74a3c4, #7ec4c4)' }}>
                            <CardContent>
 
                                <Typography variant="h5" component="div" color="white">
                                    100
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="white">
                                    Partners
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" sx={{  
                                    backgroundColor:'white'
                                }}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>


                <Grid container spacing={40} pt={10}>
                    <Grid item xs={2} md={2}>
                        <Card className="Card" sx={{ minWidth: 240, background: 'linear-gradient(to right bottom, #22b3ab, #39cce3)' }}>
                            <CardContent>
 
                                <Typography variant="h5" component="div" color="white">
                                    100
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="white">
                                    Partners
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" sx={{  
                                    backgroundColor:'white'
                                }}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2} >
                    <Card className="Card" sx={{ minWidth: 240, background: 'linear-gradient(to right bottom, #03cafc, #7ec4c4)' }}>
                            <CardContent>
 
                                <Typography variant="h5" component="div" color="white">
                                    10000 +
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="white">
                                    Users
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"  sx={{  
                                    backgroundColor:'white'
                                }}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
                </Container>
            </Box>
        </>

    )
}
