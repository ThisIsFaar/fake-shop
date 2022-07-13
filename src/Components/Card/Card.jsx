import Button from "../Button/Button";
import './Card.css';

export default function Card ({data}) {
  return (
    <article className="card">
      <div className="card__inner">
        <div className="card__imagen">
          <img src={data.image} alt="" width="250" />
        </div>
        <div className="card__info">
          <p className="card__title" >{data.title}</p>
          <p className="card__price" >$ {data.price}</p>
          <Button link={`/product/${data.id}`} data='Know more' />          
        </div>
      </div>
    </article>
  );
}
