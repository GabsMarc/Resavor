'use client'

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import GraficoPizza from "./components/GraficoPizza";


export default function Home() {
  return (
    <div className="bg-black w-[100vw] h-[100vh] flex">
      <div className="flex flex-1 py-[120px] px-[80px]">

        <div className="flex-1 flex items-center ">
          <GraficoPizza />
        </div>

        <div className="bg-gradient-to-b from-[#878787] via-[#2f2f2f] to-[#171717] rounded-[5px] w-[3px] mt-10" />

        <div className="flex-1">

          <Carousel className="">
            <CarouselContent className="gap-2 mt-[50px] pl-15">
              <CarouselItem className="carousel-card flex flex-col">
                <div className="flex flex-col flex-1 mx-4 mt-2 pt-4 gap-7">
                  <span className="text-[14px] text-[#afafaf]">Valor Pago no último mês</span>
                  <span className="text-[25px] pl-3">R${4005.45}</span>
                </div>
                {/* <div className="bg-purple-400 flex-1"></div> */}
              </CarouselItem>
              <CarouselItem className="carousel-card">...</CarouselItem>
              <CarouselItem className="carousel-card">...</CarouselItem>
              <CarouselItem className="carousel-card">...</CarouselItem>
            </CarouselContent>
          </Carousel>

        </div>

      </div>
    </div>
  );
}
