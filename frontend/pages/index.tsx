import React, { useEffect, useState } from "react";
import { Image } from "@heroui/react";
import { Button } from "@heroui/button";
import Waves from "@/components/waves";
import Counter from "@/components/counter";
import CardStyled from "@/components/cardstyled";

export default function IndexPage() {
  return (
    <div>
      <PageOne />
      <PageTwo />
      <PageFour />
      <PageThree />

      <div className="fixed bottom-4 lg:bottom-14 right-4 lg:right-16">
        <Button className="z-40 h-auto bg-transparent drop-shadow-[0_0_10px_#F9C97C] " onPress={() => window.open("https://wa.me/5565981135626", "_blank")}>
          <Image
            alt="HeroUI hero Image"
            height={60}
            width={60}
            src="whatsapp_amarelo.png"
          />
        </Button>
      </div>
    </div>
  );
}



const PageOne = () => {

  return (
    <>
      {/*Desktop*/}
      <div className="hidden md:flex static p-8 col-12 md:flex-row items-center h-screen page-1">
        <div className="justify md:w-2/3 lg:mr-20 lg:p-40 p-4 text-center md:text-left">
          <p className="presentation" style={{ margin: '44px 0' }}>
            Olá, sou a Silvana Silva <strong className="font-bold">psicóloga clínica</strong> em <strong className="font-bold">terapia cognitivo comportamental (TCC)</strong>, especializada em atendimento psicoterapêutico  <strong className="font-bold">infantil, adolescente e adultos</strong>. O meu propósito é promover um espaço de escuta e acolhimento singular, onde você possa deslumbrar e fortalecer os seus valores, e com sutileza criar novos caminhos e oportunidades.
          </p>

          <h1 className="text-4xl md:text-8xl	title m-80">Silvana Silva</h1>

          <div className="row flex flex-col md:flex-row items-center">
            <h5 className="text-xl	subtitle">CRP 18/7036</h5>
            <div className="flex flex-row items-center">
              <i className="fas fa-map-marker-alt md:ml-9 mr-1" />
              <h5 className="text-xl subtitle">Tangará da Serra, MT</h5>
            </div>
          </div>
        </div>

        <div className="md:content-center md:w-1/3">
          <Image
            alt="HeroUI hero Image"
            width={'auto'}
            radius='full'
            src="profile1.png"
          />
        </div>

        <div className="absolute hidden lg:block inset-x-0 bottom-0 left-[66.6667%] translate-x-[-50%] -translate-y-[20px]">
          <Image
            alt="HeroUI hero Image"
            height={300}
            width={300}
            src="girassol.svg"
          />
        </div>

        <Waves />

      </div>

      {/*Mobile*/}
      <div className="static md:hidden">
        <div className="p-8 col-12 flex flex-col md:flex-row items-center page-1 pt-20">
          <h1 className="text-6xl md:text-8xl	title m-8">Silvana Silva</h1>

          <div className="row flex flex-col md:flex-row items-center">
            <h5 className="text-xl subtitle font-bold">CRP 18/7036</h5>
            <div className="flex flex-row items-center">
              <i className="fas fa-map-marker-alt md:ml-9 mr-1" />
              <h5 className="text-xl subtitle">Tangará da Serra, MT</h5>
            </div>
          </div>


          <div className="md:content-center md:w-1/3 my-8">
            <Image
              alt="HeroUI hero Image"
              width={'auto'}
              radius='full'
              src="profile1.png"
            />
          </div>
        </div>
        <div className="relative">
          <Waves />
        </div>
        <div className="content flex">
          <div className="relative -top-12 justify text-center md:text-left md:w-2/3 presentation_mobile">
            <div className="fancy-quote presentation m-0 p-8">
              <blockquote>
                <p>
                  Olá, sou a Silvana Silva <strong className="font-bold">psicóloga clínica</strong> em <strong className="font-bold">terapia cognitivo comportamental (TCC)</strong>, especializada em atendimento psicoterapêutico  <strong className="font-bold">infantil, adolescente e adultos</strong>. O meu propósito é promover um espaço de escuta e acolhimento singular, onde você possa deslumbrar e fortalecer os seus valores, e com sutileza criar novos caminhos e oportunidades.
                </p>
              </blockquote>
            </div>
          </div>
        </div>


        <div className="w-1/3 m-auto">
          <Image
            alt="HeroUI hero Image"
            height={200}
            width={200}
            src="girassol.svg"
          />
        </div>

      </div>
    </>

  )
}

const PageTwo = () => {
  return (
    <div className="relative -top-40 lg:top-0 col-12 flex flex-col py-20 page2">

      <div className="flex flex-col md:flex-row justify mx-auto lg:p-30 gap-20">
        <CardStyled title=''>
          <div className="w-auto m-auto">
            <Image
              alt=""
              height={'auto'}
              width={'auto'}
              src="familia.png"
            />
          </div>

          <div className="flex flex-col md:flex-row justify mx-auto counter">
            <h1>+</h1><Counter countTo={120} />
          </div>
          <h1 className="m-auto text-center text-xl lg:text-2xl" style={{ color: '#936316' }}>Famílias Atendidas</h1>
        </CardStyled>

        <CardStyled title=''>
          <div className="w-auto m-auto">
            <Image
              alt=""
              height={'auto'}
              width={'auto'}
              src="saude-mental.png"
            />
          </div>
          <div className="flex flex-col md:flex-row justify mx-auto counter">
            <h1>+</h1><Counter countTo={1500} />
          </div>
          <h1 className="m-auto text-center text-xl lg:text-2xl" style={{ color: '#936316' }}>Sessões Realizadas</h1>
        </CardStyled>

      </div>
    </div>
  );
};

const PageThree = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2100;
    canvas.height = 2970;
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = 'rgb(253, 237, 211)';
    ctx.moveTo(-43.69216, 134.98333);
    ctx.bezierCurveTo(-43.69216, 134.98333, 181.67260, 18.74469, 587.75249, 13.50248);
    ctx.bezierCurveTo(980.91784, 8.42716, 1063.29620, 96.06798, 1462.09580, 135.51550);
    ctx.bezierCurveTo(1817.62100, 170.68270, 2108.70410, 143.59535, 2108.70410, 143.59535);
    ctx.lineTo(2106.68670, 1119.11460);
    ctx.bezierCurveTo(1408.17200, 1118.09800, 707.74673, 1131.29180, -33.74345, 1124.59300);
    ctx.closePath();
    ctx.fill();

    const dataURL = canvas.toDataURL();
    document.querySelector('.page3').style.backgroundImage = `url(${dataURL})`;
  }, []);


  return (
    <div className="relative -top-40 lg:top-0 col-12 flex py-20 page3">
      <div className="flex flex-col lg:flex-row justify mx-auto gap-20">
        <CardStyled title=''>
          <div className="wx-auto m-auto">
            <Image
              alt=""
              height={'auto'}
              width={'auto'}
              src="teste.png"
            />
          </div>

          <div className="flex flex-col items-center mt-4">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-700">Avaliações para</h2>
            <ul className="list-none list-disc text-center text-md lg:text-lg text-gray-600 mt-2">
              <li className="before:content-['✔']">Ansiedade</li>
              <li className="before:content-['✔']">Depressão</li>
              <li className="before:content-['✔']">TDAH (Transtorno do Déficit de Atenção e Hiperatividade)</li>
              <li className="before:content-['✔']">TOD (Transtorno Opositor Desafiador)</li>
              <li className="before:content-['✔']">TOC (Transtorno Obsessivo-Compulsivo)</li>
              <li className="before:content-['✔']">TEA (Transtorno do Espectro Autista)</li>
              <li className="before:content-['✔']">Outros</li>
            </ul>
          </div>
        </CardStyled>


        <CardStyled title="">
          <div className="w-auto mx-auto">
            <Image alt="Educação em Psicologia" height="auto" width="auto" src="educacao.png" />
          </div>

          <div className="flex flex-col items-center mt-4">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-700">Formação</h2>
            <ul className="list-none text-center text-md lg:text-lg text-gray-600 mt-2 space-y-2">
              <li className="items-center flex flex-col mt-2">
                <span className="font-medium">Pós-graduação em Terapia Cognitivo-Comportamental</span>
                <span className="text-sm">Faculdade Cognito • Dez/2023 - Dez/2025</span>
              </li>

              <li className="items-center flex flex-col mt-2">
                <span className="font-medium">Pós-graduação em Psicologia Clínica</span>
                <span className="text-sm">Facuminas EAD • Set/2022 - Mar/2023</span>
              </li>

              <li className="items-center flex flex-col mt-2">
                <span className="font-medium">Pós-graduação em Análise do Comportamento Aplicada (ABA)</span>
                <span className="text-sm">Facuminas EAD • Set/2022 - Mar/2023</span>
              </li>

              <li className="items-center flex flex-col mt-2">
                <span className="font-medium">Graduação em Psicologia</span>
                <span className="text-sm">Faculdade de Ensino Superior de Tangará da Serra • 2017 - 2021</span>
              </li>
            </ul>
          </div>
        </CardStyled>


        <CardStyled title="">
          <div className="w-auto mx-auto">
            <Image alt="Autismo e ABA" height="auto" width="auto" src="autismo.png" />
          </div>

          <div className="flex flex-col items-center mt-4">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-700 text-center">
              Especialista em TEA
            </h2>
            <ul className="list-none list-disc text-center text-md lg:text-lg text-gray-600 mt-2">
              <li className="before:content-['✔']">Intervenção personalizada para crianças atípicas</li>
              <li className="before:content-['✔']">Orientação de pais e famílias</li>
              <li className="before:content-['✔']">Desenvolvimento de habilidades sociais, cognitivas e emocionais para vida e escola</li>
              <li className="before:content-['✔']">Supervisora e Aplicadora da ciência ABA (Applied Behavior Analysis)</li>
            </ul>

          </div>
        </CardStyled>
      </div>
    </div>
  )
}

const PageFour = () => {
  return (
    <div className="relative -top-40 lg:top-0 flex flex-col items-center py-20 px-4 bg-[#F9F5F1]">
      <div className="w-auto m-auto">
        <Image alt="Atendimento Remoto" height="auto" width="auto" src="educacao-a-distancia.png" />
      </div>

      <h1 className="tracking-tight text-center inline font-semibold from-[#936316] to-[#F5A524] text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Atendimento Remoto e Presencial&nbsp;</h1>
      <h3 className="text-center text-xl lg:text-2xl text-[#F7B750] font-medium mt-2">
        Em Tangará da Serra
      </h3>

      <button
        className="mt-6 bg-[#F7B750] hover:bg-[#F5A524] text-[#62420E] font-semibold py-3 px-6 rounded-full text-lg shadow-md transition-all duration-300"
        onClick={() => window.open("https://wa.me/5565981135626", "_blank")}
      >
        Agende seu horário
      </button>
    </div>
  );
};
