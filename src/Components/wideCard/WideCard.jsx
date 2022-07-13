import Button from "../Button/Button";
import "./WideCard.css";

export default function WideCard({ data }) {
  return (
    <article className="wcard">
      <div className="wcard__inner">
        <div className="wcard__imagen">
          <img src={data.image} alt="" width="250" />
        </div>
        <div className="wcard__info">
          <p className="wcard__title">{data.title}</p>
          <p className="wcard__desc" >{data.description}</p>
          <p className="wcard__rate" >Rating {data.rating.rate} / 5 </p>
          <p className="wcard__price">$ {data.price}</p>
          <Button link={`/product/${data.id}`} data="Purchase" />
        </div>
      </div>
    </article>
  );
}
