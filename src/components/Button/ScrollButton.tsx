import { Button } from '@mui/material'

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <Button onClick={scrollToTop}>
      <img src="/assets/Icon/ArrowDown.svg" className="w-8" />
    </Button>
  )
}

export default ScrollButton
