import { Grid, Box } from '@mui/material'

const Footer = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent="center"
        className="pt-16 pb-8 text-center"
      >
        <Grid item xs={12} pb={2}>
          <div className="h3-text">FOLLOW US</div>
        </Grid>
        <Grid item container justifyContent="center" columnSpacing={4} xs={12}>
          <Grid item sx={{ py: '5px' }}>
            <a href="https://twitter.com/aflmint">
              <img
                src="/assets/Icon/Twitter-light.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Twitter-hover.svg')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Twitter-light.svg')
                }
              />
            </a>
          </Grid>
          <Grid item sx={{ py: '5px' }}>
            <a href="https://discord.com/invite/hnJakyPd" className="">
              <img
                src="/assets/Icon/Discord-light.svg"
                onMouseOver={(e) => {
                  e.currentTarget.src = '/assets/Icon/Discord-hover.svg'
                }}
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Discord-light.svg')
                }
              />
            </a>
          </Grid>
          <Grid item sx={{ py: '5px' }}>
            <a href="https://www.instagram.com/aflmint/">
              <img
                src="/assets/Icon/Instagram-light.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Instagram-hover.svg')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Instagram-light.svg')
                }
              />
            </a>
          </Grid>
          <Grid item sx={{ py: '5px' }}>
            <a href="https://facebook.com/aflmint">
              <img
                src="/assets/Icon/Facebook-light.svg"
                onMouseOver={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Facebook-hover.svg')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/assets/Icon/Facebook-light.svg')
                }
              />
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
              className="hover:text-transparent underline bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2"
              href="https://www.afl.com.au/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Terms of use
            </a>
          </p>
        </Grid>
        <Grid item>
          <p className="fineprint-text">
            <a
              className="hover:text-transparent underline bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2"
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
