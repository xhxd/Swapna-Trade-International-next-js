import styles from "../styles/equipments.module.css";
import Image from "next/image";

function FoodEquipments({ id, data }) {
  return (
    <div className={styles.food__equipment}>
      <div className={styles.equipment__image}>
        <Image
          src={data.image1}
          alt=""
          width={230}
          height={230}
          className={styles.imageObject}
        />
      </div>
      <div className={styles.equipment__name}>
        <p>{data.name}</p>
      </div>
    </div>
  );
}

export default FoodEquipments;
