import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

const CardStyled = ({ title, children }: CardStyledProps) => {
    return (
      <Card className="w-auto md:w-[400px] p-5 mx-5 card">
        <CardHeader className="flex gap-3">
          <h1 className="text-lg m-auto text-center">{title}</h1>
        </CardHeader>
        <CardBody>
          {children}
        </CardBody>
      </Card>
    );
  }
  interface CardStyledProps {
    title: string;
    children: React.ReactNode;
}

export default CardStyled;