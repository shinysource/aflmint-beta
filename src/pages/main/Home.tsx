import { Grid } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link } from 'react-router-dom'

import CustomButton from 'components/Button/CustomButton'
import ScrollButton from 'components/Button/ScrollButton'
import Footer from 'layout/Footer'
import { ArrowAnim } from '../../components/Animations/Animations'

const Home = () => {
  return (
    <div className="text-white">
      <Grid container className="py-10 home-back">
        <Grid item container justifyContent="center">
          <Grid item>
            <Link to="/">
              <img src="/assets/logo/Logo.svg"></img>
            </Link>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className="text-animate-content text-4xl font-normal text-center py-2 md:py-4 lg:py-4 w-[100%] sm:w-[100%] md:w-full lg:w-full">
            <div className="text-animate-content-container">
              <ul className="text-animate-content-container-list">
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[32%] sm:w-[20%] md:w-[15%] lg:w-full">
                  This is epic
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[45%] sm:w-[30%] md:w-[20%] lg:w-full">
                  Year after year
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[45%] sm:w-[30%] md:w-[20%] lg:w-full">
                  Game after game
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[45%] sm:w-[30%] md:w-[20%] lg:w-full">
                  Drop after drop
                </li>
                <li className="hero-text text-animate-content-container-list-item uppercase mx-auto w-[57%] sm:w-[40%] md:w-[30%] lg:w-full">
                  The ultimate collection
                </li>
              </ul>
            </div>
          </div>
          <div className="summary-text pt-2">AFL NFTs are coming.</div>
          <div className="py-2 md:py-4 lg:py-4">
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
          </div>
        </Grid>

        <Grid container alignItems="flex-end">
          <ArrowAnim />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className="text-center bg-black1">
        <Grid item xs={12} pt={4}>
          <p className="h2-text">EPIC FOOTY MOMENTS GET MINTED</p>
        </Grid>
        <Grid item xs={11} sm={8} lg={6} xl={4} pt={2}>
          <p className="paragraph-text">
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
