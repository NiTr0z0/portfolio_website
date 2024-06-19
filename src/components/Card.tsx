import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  buttonLink: string;
  buttonImagePath: string;
}
const Card = ({ title, children, buttonLink, buttonImagePath }: Props) => {
  return (
    <>
      <div className="card border-light mb-3 text-light bg-dark">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{children}</p>
          <a href={buttonLink} className="btn btn-dark">
            <img src={buttonImagePath} width="20" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
