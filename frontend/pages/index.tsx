import React, {useEffect} from "react";
import { Image } from "@heroui/react";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Button} from "@heroui/button";

export default function IndexPage() {
  return (
    <div>
      <PageOne />
      <PageTwo />
      <PageThree />
      
    </div>
  );
}

const PageOne = () => {
  return (
      <div className="static p-8 col-12 flex flex-col md:flex-row items-center h-screen page-1">
        <div className="justify md:w-2/3 lg:mr-20 lg:p-40 p-4 text-center md:text-left">
          <p className="presentation">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
            width= {'auto'}
            radius='full'
            src="profile1.png"
          />
        </div>
        <div className="absolute hidden lg:block inset-x-0 bottom-0 left-[66.6667%] translate-x-[-50%] translate-y-[50px]">
          <Image
              alt="HeroUI hero Image"
              height={300}
              width={300}
              src="girassol.svg"
            />
        </div>
      </div>

  )
}

const PageTwo = () => {
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
    document.querySelector('.page2').style.backgroundImage = `url(${dataURL})`;
  }, []);

  return (
    <div className="relative col-12 flex flex-col py-20 page2">
      <div className="flex flex-col md:flex-row justify mx-auto gap-20 page2">
        <CardStyled title='Assunto'>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </CardStyled> 

        <CardStyled title='Assunto'>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </CardStyled>
      </div>

      <div className="md:absolute bottom-0 left-0">
        <Image
            alt="HeroUI hero Image"
            height={300}
            width={300}
            src="family.svg"
          />
        </div>
    </div>
  );
};

const PageThree = () => {
  return (
    <div className="col-12 flex flex-row py-20 page3">
      <div className="flex flex-row justify mx-auto gap-20">
        <CardStyled title='Assunto'>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </CardStyled>

        <CardStyled title='Assunto'>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </CardStyled>

        <CardStyled title='Assunto'>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </CardStyled>

      </div>
    </div>
  )
}


interface CardStyledProps {
  title: string;
  children: React.ReactNode;
}

const CardStyled = ({ title, children }: CardStyledProps) => {
  return (
    <Card className="max-w-[400px] p-5 card">
      <CardHeader className="flex gap-3">
        <h1 className="text-lg">{title}</h1>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
}


