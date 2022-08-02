import { useState, useEffect } from "react";
import Link from "next/link";

const styles = {
  machineOptions: `py-[25px] px-[10px] fixed w-[20%] hidden lg:flex lg:flex-col`,
  activeRow: `flex items-center p-[15px] cursor-pointer border-b border-solid border-[lightgray] leading-[20px] bg-[lightgrey] rounded-[15px]`,
  deactive: `flex items-center p-[15px] cursor-pointer border-b border-solid border-[lightgray] leading-[20px] hover:bg-[lightgrey] hover:rounded-[15px]`,
  optionText: `mx-[20px] font-[600] bg-transparent`,
};

const Sidebar = () => {
  const [rowHighlight, setRowHighlight] = useState("All Machines");

  useEffect(() => {
    var urlArr = window.location.href.split("/");

    switch (urlArr[3]) {
      case "":
        setRowHighlight("All Machines");
        break;
      case "foodmachines":
        setRowHighlight("Food Machines");
        break;
      case "blockmachines":
        setRowHighlight("Block Machines");
        break;
      case "cosmeticmachines":
        setRowHighlight("Cosmetic Machines");
        break;
      default:
        setRowHighlight("All Machines");
    }
  }, []);

  return (
    <div className={styles.machineOptions}>
      <Link href="/">
        <a>
          <div
            className={
              rowHighlight === "All Machines"
                ? styles.activeRow
                : styles.deactive
            }
            onClick={() => {
              setRowHighlight("All Machines");
            }}
          >
            <h4 className={styles.optionText}>All Machines</h4>
          </div>
        </a>
      </Link>
      <Link href="/foodmachines">
        <a>
          <div
            className={
              rowHighlight === "Food Machines"
                ? styles.activeRow
                : styles.deactive
            }
            onClick={() => {
              setRowHighlight("Food Machines");
            }}
          >
            <h4 className={styles.optionText}>Food Machines</h4>
          </div>
        </a>
      </Link>
      <Link href="/blockmachines">
        <a>
          <div
            className={
              rowHighlight === "Block Machines"
                ? styles.activeRow
                : styles.deactive
            }
            onClick={() => {
              setRowHighlight("Block Machines");
            }}
          >
            <h4 className={styles.optionText}>Block Machines</h4>
          </div>
        </a>
      </Link>
      <Link href="/cosmeticmachines">
        <a>
          <div
            className={
              rowHighlight === "Cosmetic Machines"
                ? styles.activeRow
                : styles.deactive
            }
            onClick={() => {
              setRowHighlight("Cosmetic Machines");
            }}
          >
            <h4 className={styles.optionText}>Cosmetic Machines</h4>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
