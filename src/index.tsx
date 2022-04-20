import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from 'hooks/useScroll'
import App from 'App'

import 'styles/tailwind.css'

render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
