import styles from "../styles/packingMachine.module.css";
import Image from "next/image";
import Link from "next/link";

function BlockMachine({ name, image, id }) {
  const saveMachine = (machineID) => {
    const localStorage = window.localStorage;

    var machines = [];
    var presentMachines = [];

    if (localStorage.getItem("blockMachine") == null) {
      machines = [];
      machines.push(machineID);
      localStorage.setItem("blockMachine", JSON.stringify(machines));
    } else {
      presentMachines = JSON.parse(localStorage.getItem("blockMachine"));

      const truthVerifier = (element) => element == machineID;
      var truth = presentMachines.some(truthVerifier);

      if (truth) {
        return;
      } else {
        presentMachines.push(machineID);
        localStorage.setItem("blockMachine", JSON.stringify(presentMachines));
      }
    }
  };

  return (
    <div className={styles.product}>
      <Link href={`/blockmachine/${id}`}>
        <a>
          <div className={styles.productDetails}>
            <div className={styles.productImage}>
              <Image src={image} alt="" width={178} height={192} />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.productName}>
                <p>{name}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <div
        className={styles.productButton}
        onClick={() => {
          saveMachine(id);
        }}
      >
        <div className={styles.buttonIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bookmark"
            viewBox="0 0 16 16"
          >
            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
          </svg>
        </div>
        <div className={styles.buttonText}>
          <h4>SAVE</h4>
        </div>
      </div>
    </div>
  );
}

export default BlockMachine;
