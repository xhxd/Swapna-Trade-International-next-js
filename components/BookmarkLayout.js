import styles from "../styles/bookmarkLayout.module.css";
import Link from "next/link";

const BookmarkLayout = ({ id, image, name, linkFirst, type, removeItem }) => {
  return (
    <div className={styles.saved__product}>
      <Link href={`/${linkFirst}/${id}`}>
        <a>
          <div className={styles.savedProduct__details}>
            <img src={image} alt="" className={styles.savedProduct__image} />
            <p className={styles.savedProduct__name}>{name}</p>
          </div>
        </a>
      </Link>
      <button
        className={styles.savedProduct__button}
        onClick={() => {
          removeItem(type, id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BookmarkLayout;
