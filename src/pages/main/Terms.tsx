import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <Grid container className="pt-9 text-white thanks-back">
      <Grid item container justifyContent="center">
        <Grid item>
          <Link to="/">
            <img src="/assets/logo/Logo.svg"></img>
          </Link>
        </Grid>
        <Grid container justifyContent="center" className="text-center">
          <Grid item xs={9} sm={12} pt={8} pb={8}>
            <p className="font-podium49 text-[32px] font-bold leading-8 uppercase">
              Terms and Conditions
            </p>
          </Grid>
          <Grid container className="justify-center pb-10">
            <Grid item className="text-left w-4/5">
              <p className="text-xl font-bold leading-10 pb-4">
                1. Copyright and Trade Marks
              </p>
              <div className="flex pl-5">
                (a)
                <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                  All copyright and other intellectual property rights
                  subsisting in the text, images, photographs, graphics, user
                  interface, and other content provided on this website ("the
                  Website") are owned or licensed by the Australian Football
                  League (AFL) and protected by the laws of Australia and other
                  countries.
                </p>
              </div>
              <div className="flex pl-5">
                (b)
                <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                  You are authorised to view the Website and its contents using
                  your web browser but must not reproduce, transmit (including
                  broadcast), communicate, adapt, distribute, sell, modify or
                  publish or otherwise use any of the contents on the Website,
                  including audio and video excerpts, except as permitted by
                  statute or with the AFL&apos;s prior written consent.
                </p>
              </div>
              <div className="flex pl-5">
                (c)
                <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                  The Website includes registered and unregistered trade marks
                  of the AFL and various third parties including but not limited
                  to the AFL Mint logo. You may not use any of these trade marks
                  without the prior written consent of the owner of the relevant
                  trade mark.
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid container className="justify-center pb-10">
            <Grid item className="text-left w-4/5">
              <p className="text-xl font-bold leading-10 pb-4">
                2. Third Party Links
              </p>
              <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                The Website may contain links to third party websites. The links
                are provided solely for your convenience and do not indicate,
                expressly or impliedly, any endorsement by the AFL of the sites
                or the information, products or services provided at those
                sites. You access those sites and use the information, products
                and services made available at those sites solely at your own
                risk.
              </p>
            </Grid>
          </Grid>

          <Grid container className="justify-center pb-10">
            <Grid item className="text-left w-4/5">
              <p className="text-xl font-bold leading-10">3. Your Conduct</p>
              <div className="flex pl-5">
                (a)
                <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                  You must not post or transmit to or via the Website any
                  information or material or otherwise use the Website for any
                  activity which breaches any laws or regulations, infringes a
                  third party&apos;s rights or privacy or is contrary to any
                  relevant standards or codes, including generally accepted
                  community standards. You must also not permit or enable
                  another person to do any of those things. You warrant that any
                  information provided by you is true and correct.
                </p>
              </div>
              <div className="flex pl-5">
                (b)
                <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                  You may be permitted to submit, post, transmit or otherwise
                  make content available via the Website (
                  <strong>Your Content</strong>). If you do so, you grant to the
                  AFL, a non-exclusive, irrevocable, perpetual, worldwide,
                  royalty-free, transferable licence to use, reproduce, modify,
                  adapt, publish or communicate to the public Your Content for
                  the reasonable purposes of the AFL&apos;s business, and the
                  right to sub-license those rights to others, subject to the
                  terms and conditions of the AFL Privacy Policy. You warrant
                  that you have the right to grant this licence, that AFL&apos;s
                  exercise of the licence rights will not infringe the
                  intellectual property rights of any person, and that Your
                  Content is not defamatory and does not breach any law. The AFL
                  may monitor or review Your Content, but the AFL is not obliged
                  to do so. The AFL may also alter or remove any of Your Content
                  at any time.
                </p>
              </div>
              <div className="flex pl-5">
                (c)
                <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                  By using the Website you agree not to do anything that
                  infringes the AFL&apos;s intellectual property rights in the
                  Website, including but not limited to:
                  <div className="flex pl-5">
                    (i)
                    <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                      copying, reproducing, distributing, publishing,
                      reverse-engineering, decompiling, translating or
                      disassembling the Website;
                    </p>
                  </div>{' '}
                  <div className="flex pl-5">
                    (ii)
                    <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                      bypassing, or attempting to bypass, any security features
                      of the Website, or introducing, uploading or transmitting
                      any harmful code or software to the Website;
                    </p>
                  </div>
                  <div className="flex pl-5">
                    (iii)
                    <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                      taking any action to impair, prejudice or diminish the
                      AFL&apos;s intellectual property rights in the Website.
                    </p>
                  </div>
                </p>
              </div>
              <div className="flex pl-5">
                (d)
                <p className="text-base font-normal leading-6 pl-3 pb-3 md:text-lg md:leading-7">
                  You will indemnify AFL, its employees, agents and
                  representatives from any loss or damage including
                  consequential loss or damage which may arise any breach by you
                  of these terms or from your use of the Website.
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Terms
