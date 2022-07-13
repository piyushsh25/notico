import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export const NoticoFooter = () => {
    return <div class="footer-container">
        <div class="social-media">
            <GitHubIcon />
            <LinkedInIcon />
            <TwitterIcon />
        </div>
        <div class="logo"> Notico 2022. All rights reserved</div>

    </div>

}