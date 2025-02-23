import css from "./Descriction.module.css";

function Descriction({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p className={css.top}>{description}</p>
    </div>
  );
}
export default Descriction;
