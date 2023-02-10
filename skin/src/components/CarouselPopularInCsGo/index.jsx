import React, { useRef, useState } from "react";
import * as C from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import ImageSkin from "../../assets/k47.png";
import Faca from "../../assets/faca.jpg";

export default function GridCategoryGames() {
  return (
    <C.Container>
      <C.ContainerLink>
        <C.H3>Skins CS:GO</C.H3>
        <C.LinkPage to="/todos-os-produtos">Ver todas</C.LinkPage>
      </C.ContainerLink>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={ImageSkin} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>

        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={ImageSkin} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>

        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={Faca} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>

        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={Faca} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>

        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={ImageSkin} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>
      </Swiper>

      {/*    ----------------------------Skins de ofertas-------------------------- */}
      <C.ContainerLink>
        <C.H3>Skins mais vendidas</C.H3>
        <C.LinkPage to="https://1samel2.github.io/lanchonete/">Ver todas</C.LinkPage>
      </C.ContainerLink>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={ImageSkin} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>

        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={ImageSkin} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>

        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={Faca} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>

        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={Faca} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>

        <SwiperSlide>
          <C.DivContent>
            <C.Rarity>statrak awp</C.Rarity>
            <C.Title>Asiimov</C.Title>
            <C.Description>Statrak"COvertSniper Rifle</C.Description>
            <img src={ImageSkin} alt="" />
            <C.Price>555.54R$</C.Price>
            <span>field-tested (6.7% wear)</span>
            <C.Button>Add to cart</C.Button>
          </C.DivContent>
        </SwiperSlide>
      </Swiper>
    </C.Container>
  );
}
