import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  buttonLink: string;
  buttonImageName: string;
}
const Card = ({ title, children, buttonLink, buttonImageName }: Props) => {
  return (
    <>
      <div className="card border-dark mb-3 text-light bg-dark">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{children}</p>
          <a href={buttonLink} className="btn btn-dark">
            <i className={buttonImageName}></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
