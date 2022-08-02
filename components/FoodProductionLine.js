import styles from "../styles/productionline.module.css";
import Image from "next/image";
import Link from "next/link";

const FoodProductionLine = ({ id, data }) => {
  return (
    <Link href={`/foodproductionlines/${id}`}>
      <div
        className={`${styles.production__line} last:border-b-[0px] last:mb-[10px] last:rounded-b-[10px]`}
      >
        <div className={styles.line__name}>
          <h3>{data.name}</h3>
        </div>
        <div className={styles.line__image}>
          <Image src={data.image1} alt="" width={250} height={120} />
        </div>
      </div>
    </Link>
  );
};

export default FoodProductionLine;
