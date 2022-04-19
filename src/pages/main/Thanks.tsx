import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import Footer from 'layout/Footer'

const Thanks = () => {
  return (
    <Grid container className="pt-9 text-white thanks-back">
      <Grid item container justifyContent="center">
        <Grid item>
          <Link to="/">
            <img src="/assets/logo/Logo.svg"></img>
          </Link>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          className="text-center"
        >
          <Grid item xs={9} sm={12} pt={4}>
            <p className="font-podium49 text-[32px] font-bold leading-8 uppercase">
              Thanks, we’ve got your details
            </p>
          </Grid>
          <Grid item xs={8} sm={7} md={5} lg={4} xl={3} pt={2}>
            <p className="text-base font-normal leading-6 md:text-lg md:leading-8">
              We&apos;ll be in touch soon about the first drop. It&apos;s a game
              changer. It&apos;s mint.
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Grid container alignItems="flex-end">
        <Grid item sx={{ width: '100%' }}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Thanks
