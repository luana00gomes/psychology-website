
import { Image } from "@heroui/react";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

export default function IndexPage() {
  return (
    <div>
      <PageOne />
      <PageTwo />
    </div>
  );
}

const PageOne = () => {
  return (
    <div className="p-8 col-12 flex flex-row items-center h-screen">
      <div className="justify w-2/3 mr-20 p-40">
        <p className="presentation">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <h1 className="text-8xl	title m-80">Silvana Silva</h1>

        <div className="row flex flex-row items-center">
          <h5 className="text-xl	subtitle">CRP 000/9889</h5>
          <i className="fas fa-map-marker-alt ml-6 mr-2" />
          <h5 className="text-xl subtitle">Rua Tranquedo Neves, Centro</h5>

        </div>
      </div>

      <div className="content-center">
        <Image
          alt="HeroUI hero Image"
          height={400}
          radius='full'
          src="https://heroui.com/images/fruit-1.jpeg"
          width={400}
        />
      </div>
    </div>
  )
}


const PageTwo = () => {
  return (
    <div className="col-12 flex flex-row py-20 page2">
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


