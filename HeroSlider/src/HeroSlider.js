import React from 'react'
import Heroslider, {Slide} from "hero-slider"



const image1 = "https://th.bing.com/th/id/R.b62ea462238905bec0e679da8dc43713?rik=z5qUnXWXThdOPQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fAnimal-wallpapers-HD-desktop.jpg&ehk=Lrivegjw4JcK9eOnWl05o9F%2bSy2oNFAygxmeTGIfNj8%3d&risl=&pid=ImgRaw&r=0"
const image2 = "https://getwallpapers.com/wallpaper/full/8/f/0/368347.jpg"
const image3 = "https://www.pixelstalk.net/wp-content/uploads/images2/Sleeping-Leopard-HD-Animal-Wallpaper.jpg"

function HeroSlider() {
  return (
    <Heroslider
    slidingAnimation="left_to_right"
    orientation= "horizontal"
    initialSlider= {1}
    onBeforeChange={(previousSlider, nextSlider) => console.log("onBeforChange", previousSlider , nextSlider)} onChange={nextSlider => console.log("onChange", nextSlider)} 
    onAfterChange =  {nextSlider => console.log("onAfterChange", nextSlider)}
    style={{
      backgroundColor: "rgba(0,0,0, 0.33)"
    }}
    settings={{
      slidingDuration: 250,
      slidingDelay: 100,
      shouldAutoplay: true,
      shouldDisplayButtons: true,
      autoplayDuration: 5000,
      height: "100vh"

    }}
    >
      <Slide
      background={{
        // backgroundImage: image1,
        backgroundImageSrc: 'https://getwallpapers.com/wallpaper/full/8/f/0/368347.jpg',
        backgroundAttachment: "fixed"
      }}
      />
      <Slide
      background={{
        // backgroundImage: image2,
        backgroundImageSrc: 'https://www.pixelstalk.net/wp-content/uploads/images2/Sleeping-Leopard-HD-Animal-Wallpaper.jpg',
        backgroundAttachment: "fixed"
      }}
      />
      <Slide
      background={{
        backgroundImageSrc: 'https://th.bing.com/th/id/R.b62ea462238905bec0e679da8dc43713?rik=z5qUnXWXThdOPQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fAnimal-wallpapers-HD-desktop.jpg&ehk=Lrivegjw4JcK9eOnWl05o9F%2bSy2oNFAygxmeTGIfNj8%3d&risl=&pid=ImgRaw&r=0',
        backgroundAttachment: "fixed"
      }}
      />
    </Heroslider>
  )
}

export default HeroSlider