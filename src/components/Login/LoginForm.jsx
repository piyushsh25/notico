import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginButtonHandler } from '../../Hooks/slices/loginSlice';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'All rights reserved. '}
            <Link to="/">
                Notico
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function LoginForm() {
    const { username, password, state } = useSelector((store) => store.loginReducer)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [errorLogin, setErrorLogin] = React.useState()
    const pathname = location?.state?.from?.pathname || "/"
    React.useEffect(() => {
        state === "fulfilled" && navigate(pathname)
        state === "rejected" && setErrorLogin(true)
        state === "rejected" && setTimeout(() => {
            setErrorLogin(false)
        }, 5000)
        setTimeout(()=>{
            dispatch(loginActions.setStateIdleHandler())
        },500)
       
    }, [state, dispatch])
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    {errorLogin && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Try again — <strong>Password and email do not match</strong>
                    </Alert>}
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="username"
                            value={username}
                            onChange={(e) => dispatch(loginActions.setEmailHandler(e.target.value))}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => dispatch(loginActions.setPasswordHandler(e.target.value))}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => dispatch(loginButtonHandler({ username, password }))}>
                            Login
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/signup" variant="body2" state={{ pathname }}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}