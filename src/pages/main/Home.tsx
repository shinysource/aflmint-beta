import { Grid } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'react-router-dom'

import CustomButton from 'components/Button/CustomButton'
import ScrollButton from 'components/Button/ScrollButton'
import Footer from 'layout/Footer'

const Home = () => {
  return (
    <>
      <Grid container className="home-back py-10">
        <Grid item container justifyContent="center">
          <Grid item>
            <img src="public/assets/logo/Logo.svg"></img>
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
            className="text-center font-normal text-4xl"
            xs={2}
            sm={2}
            md={12}
          >
            <div className="font-podium96 uppercase text-4xl md:text-5xl font-medium xlg:text-7xl leading-8">
              This is epic
            </div>
          </Grid>
          <Grid
            item
            className="text-center font-normal text-base md:text-2xl"
            xs={11}
            sm={12}
            md={12}
          >
            <div>AFL NFTs are coming.</div>
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Grid item>
              <Link to="/signup">
                <CustomButton
                  type="button"
                  model="primary"
                  variant="contained"
                  label="NOTIFY ME"
                  className="uppercase w-36"
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

      <Grid container justifyContent="center" className="bg-black1 text-center">
        <Grid item xs={12} pt={4}>
          <p className="font-podium49 text-2xl md:text-4xl font-bold uppercase">
            Epic footy moments get minted
          </p>
        </Grid>
        <Grid item xs={11} sm={8} lg={6} xl={4} pt={2}>
          <p className="text-base font-normal leading-6 md:text-lg md:leading-8">
            Welcome to AFL Mint, the home of officially licensed AFL NFTs. This
            is a new era in footy collectibles. Get involved from the first
            bounce by registering for exclusive early notification of theme
            inaugural drop. It's mint.
          </p>
        </Grid>
        <Grid item container justifyContent="center" xs={12} pt={2}>
          <Grid item>
            <Link to="/signup">
              <CustomButton
                type="button"
                model="primary"
                variant="contained"
                label="NOTIFY ME"
                className="uppercase w-36"
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
    </>
  )
}

export default Home
