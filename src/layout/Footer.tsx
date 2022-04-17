import { Grid, Box } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent="center"
        py={6}
        className="text-center"
      >
        <Grid item xs={12} pb={2}>
          <div className="font-podium49 uppercase font-bold text-lg">
            Follow us
          </div>
        </Grid>
        <Grid item container justifyContent="center" columnSpacing={2} xs={12}>
          <Grid item>
            <a href="https://twitter.com/aflmint">
              <TwitterIcon fontSize="large" />
            </a>
          </Grid>
          <Grid item>
            <a href="https://youtube.com/aflmint">
              <YouTubeIcon fontSize="large" />
            </a>
          </Grid>
          <Grid item sx={{ py: '5px' }}>
            <a href="https://discord.com/aflmint">
              <img src="/public/assets/Icon/Discord-light.svg" />
            </a>
          </Grid>
          <Grid item>
            <a href="https://instagram.com/aflmint">
              <InstagramIcon fontSize="large" />
            </a>
          </Grid>
          <Grid item>
            <a href="https://facebook.com/aflmint">
              <FacebookIcon fontSize="large" />
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        pb={{ xs: 1, md: 2 }}
        className="bg-black1"
      >
        <Grid item>
          <Box
            component="img"
            sx={{
              content: {
                xs: `url(public/assets/Footer/Footer-mobile.svg)`,
                md: `url(public/assets/Footer/Footer-tablet.svg)`,
                lg: `url(public/assets/Footer/Footer.svg)`
              }
            }}
            alt="Logo"
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        columnSpacing={{ xs: 100, sm: 100, md: 3 }}
        rowSpacing={{ xs: 1, md: 2 }}
        pb={4}
        className="bg-black2 text-center pt-2"
      >
        <Grid item>
          <p className="text-sm font-normal">
            <a
              className="underline"
              href=" https://media.telstra.com.au/terms-of-use.html?ref=Net-Footer-Corp-Terms"
              target="_blank"
            >
              Terms of use
            </a>
          </p>
        </Grid>
        <Grid item>
          <p className="text-sm font-normal">
            <a
              className="underline"
              href="https://www.afl.com.au/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy policy
            </a>
          </p>
        </Grid>
        <Grid item>
          <p className="text-sm font-normal">
            Copyright @2022 AFL. All Rights Reserved
          </p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
