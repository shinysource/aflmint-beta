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
        className="text-center pt-16 pb-8"
      >
        <Grid item xs={12} pb={2}>
          <div className="h3-text">Follow us</div>
        </Grid>
        <Grid item container justifyContent="center" columnSpacing={2} xs={12}>
          <Grid item>
            <a href="https://twitter.com/aflmint">
              <TwitterIcon fontSize="large" className="hover:text-grey3" />
            </a>
          </Grid>
          <Grid item>
            <a href="https://youtube.com/aflmint">
              <YouTubeIcon fontSize="large" className="hover:text-grey3" />
            </a>
          </Grid>
          <Grid item sx={{ py: '5px' }}>
            <a href="https://discord.com/invite/hnJakyPd">
              <img
                src="/assets/Icon/Discord-light.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Discord-hover.svg')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Discord-light.svg')
                }
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://instagram.com/aflmint">
              <InstagramIcon fontSize="large" className="hover:text-grey3" />
            </a>
          </Grid>
          <Grid item>
            <a href="https://facebook.com/aflmint">
              <FacebookIcon fontSize="large" className="hover:text-grey3" />
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container justifyContent="center" pb={{ xs: 1, md: 2 }}>
        <Grid item>
          <img
            style={{ height: '45px' }}
            className="mb-8"
            src="/assets/Footer/Flow-Footer.png"
            alt="Built on Flow"
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
        className="pt-2 text-center bg-black2"
      >
        <Grid item>
          <p className="fineprint-text">
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
          <p className="fineprint-text">
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
          <p className="fineprint-text">
            Copyright @2022 AFL. All Rights Reserved
          </p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
