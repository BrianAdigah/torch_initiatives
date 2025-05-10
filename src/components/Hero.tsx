
import CarouselItem from "./CarouselItem";
import { Container } from "@/components/Container";
import heroImg1 from "../../public/img/plant2.png";
import { createClient } from "@/utils/supabase/server";
import Spinner from "./Spinner";


export const Hero = async () => {
  var  link  = '#/'
  var header = 'Welcome to Torch Initiatives'


  

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="w-full slider-container">
          <CarouselItem
            header={header}
            paragraph={`
              We extend our heartfelt gratitude to Thrive Philanthropy for their invaluable support during Africa 
              Vegan Restaurant Week. Thanks to their partnership, Torch Initiatives w able to engage and inspire 
              communities across Kenya, promoting the health, environmental , and ethical benefits of plant based diats. 
              Together , we reached over 2 million Kenyans, highlighting the impact of sustainable, compassionate food 
              choices. We are proud to be part of this movement, driving positive change for our planet an future generations.`}
            link={link}
            imgSrc={"/img/image1.jpg"}
          />
        </div>

      </Container>

    </>
  );
}


