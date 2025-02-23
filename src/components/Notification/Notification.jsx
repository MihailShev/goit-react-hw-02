import css from "./Notification.module.css";

function Notification({ textNotification }) {
  return (
    <>
      <p className={css.top}>{textNotification}</p>
    </>
  );
}

export default Notification;
