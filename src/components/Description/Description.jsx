import css from "./Description.module.css";

function Description({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p className={css.top}>{description}</p>
    </div>
  );
}
export default Description;
