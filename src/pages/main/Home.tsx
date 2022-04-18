import { Grid } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'react-router-dom'

import CustomButton from 'components/Button/CustomButton'
import ScrollButton from 'components/Button/ScrollButton'
import Footer from 'layout/Footer'

const Home = () => {
  return (
    <div className="text-white">
      <Grid container className="py-10 home-back">
        <Grid item container justifyContent="center">
          <Grid item>
            <Link to="/">
              <img src="/public/assets/logo/Logo.svg"></img>
            </Link>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          py={16}
          columns={{ xs: 7, sm: 11, md: 12, lg: 12 }}
        >
          <Grid
            item
            className="text-4xl font-normal text-center"
            xs={2}
            sm={2}
            md={12}
          >
            <div className="font-podium96 text-4xl xlg:text-7xl font-medium leading-8 uppercase md:text-5xl">
              This is epic
            </div>
          </Grid>
          <Grid
            item
            className="text-base font-normal text-center md:text-2xl"
            xs={11}
            sm={12}
            md={12}
          >
            <div>AFL NFTs are coming.</div>
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Grid item>
              <Link to="/registration">
                <CustomButton
                  type="button"
                  model="primary"
                  variant="contained"
                  label="NOTIFY ME"
                  className="w-36 uppercase"
                  endIcon={<ArrowForwardIosIcon sx={{ color: '#D3D3D3' }} />}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" alignItems="end">
          <Grid item>
            <ScrollButton />
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className="text-center bg-black1">
        <Grid item xs={12} pt={4}>
          <p className="font-podium49 text-2xl font-bold uppercase md:text-4xl">
            Epic footy moments get minted
          </p>
        </Grid>
        <Grid item xs={11} sm={8} lg={6} xl={4} pt={2}>
          <p className="text-base font-normal leading-6 md:text-lg md:leading-8">
            Welcome to AFL Mint, the home of officially licensed AFL NFTs. This
            is a new era in footy collectibles. Get involved from the first
            bounce by registering for exclusive early notification of theme
            inaugural drop. It&apos;s mint.
          </p>
        </Grid>
        <Grid item container justifyContent="center" xs={12} pt={2}>
          <Grid item>
            <Link to="/registration">
              <CustomButton
                type="button"
                model="primary"
                variant="contained"
                label="NOTIFY ME"
                className="w-36 uppercase"
                endIcon={<ArrowForwardIosIcon sx={{ color: '#D3D3D3' }} />}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="bg-black1">
        <Grid item sx={{ width: '100%' }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
