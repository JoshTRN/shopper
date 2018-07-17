import React from 'react';
import { Header, Footer } from '../Layouts';
import BottomNav from '../Layouts/BottomNav'
import MainButtons from '../profile/mainButtons'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Instructions from '../Exercises/Dialogs/Instructions';

const Login = (props) => (

    <div>
        <Header login={props.login}
        />
        <Grid container spacing={24} style={{ paddingTop: "25px" }}>
            <Grid item xs={12}>
                <Paper style={{ paddingTop: "20px", paddingBottom: "20px", textAlign: 'center' }}>
                    <Typography variant="display1" align="center" style={{ color: "black" }}>
                        Welcome to Shopper, home for the organized shopper!
                      </Typography>
                    <Instructions />
                </Paper>
            </Grid>
        </Grid>
        <Grid container spacing={24} style={{ paddingTop: "25px", paddingBottom: "30px" }}>
            <MainButtons />
        </Grid>
        <BottomNav />
        <Footer />

    </div>
)

export default Login;