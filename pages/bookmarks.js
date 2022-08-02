import Header from "../components/Header";
import {
  packingMachineData,
  ProductionLineData,
  FoodEquipmentData,
  CosmeticMachineData,
  BlockMachineData,
} from "../lib/getData";
import styles from "../styles/bookmarkLayout.module.css";
import BookmarkLayout from "../components/BookmarkLayout";
import { useEffect, useState } from "react";
import Head from "next/head";

export async function getStaticProps() {
  var packingMachine = await packingMachineData();
  var productionLine = await ProductionLineData();
  var foodEquipment = await FoodEquipmentData();
  var cosmeticMachine = await CosmeticMachineData();
  var blockMachine = await BlockMachineData();

  return {
    props: {
      packingMachine: packingMachine,
      productionLine: productionLine,
      foodEquipment: foodEquipment,
      cosmeticMachine: cosmeticMachine,
      blockMachine: blockMachine,
    },
  };
}

const bookmarks = ({
  packingMachine,
  productionLine,
  foodEquipment,
  cosmeticMachine,
  blockMachine,
}) => {
  const [savedPacking, setSavedPacking] = useState([]);
  const [savedLine, setSavedLine] = useState([]);
  const [savedCosmetic, setSavedCosmetic] = useState([]);
  const [savedBlock, setSavedBlock] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getMachine = () => {
      const localStorage = window.localStorage;
      var savedPackingM = JSON.parse(localStorage.getItem("packingMachine"));
      var savedLineM = JSON.parse(localStorage.getItem("lineMachine"));
      var savedCosmeticM = JSON.parse(localStorage.getItem("cosmeticMachine"));
      var savedBlockM = JSON.parse(localStorage.getItem("blockMachine"));

      var filteredPacking = [];
      var filteredLine = [];
      var filteredCosmetic = [];
      var filteredBlock = [];

      if (savedPackingM != null) {
        filteredPacking = packingMachine.filter((machine) => {
          return savedPackingM.includes(machine.id);
        });
      }

      if (savedLineM != null) {
        filteredLine = productionLine.filter((machine) => {
          return savedLineM.includes(machine.id);
        });
      }

      if (savedCosmeticM != null) {
        filteredCosmetic = cosmeticMachine.filter((machine) => {
          return savedCosmeticM.includes(machine.id);
        });
      }

      if (savedBlockM != null) {
        filteredBlock = blockMachine.filter((machine) => {
          return savedBlockM.includes(machine.id);
        });
      }

      setSavedPacking(filteredPacking);
      setSavedLine(filteredLine);
      setSavedCosmetic(filteredCosmetic);
      setSavedBlock(filteredBlock);
    };

    getMachine();
    setReload(false);
  }, [reload]);

  console.log(savedPacking);
  console.log(savedLine);
  console.log(savedCosmetic);
  console.log(savedBlock);

  const removeItem = (type, id) => {
    const localStorage = window.localStorage;

    var items = JSON.parse(localStorage.getItem(`${type}`));

    var finalItems = [];

    items.map((item) => {
      if (item != id) {
        finalItems.push(item);
      }
    });

    if (finalItems.length == 0) {
      localStorage.removeItem(`${type}`);
    } else {
      localStorage.setItem(`${type}`, JSON.stringify(finalItems));
    }

    setReload(true);
  };

  return (
    <div>
      <Head>
        <title>Swapna Trade International | Bookmarks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Buy high quality food machines, cosmetic machines, block machines ets."
        />
        <meta
          name="keywords"
          content="food machines, cosmetic machines, block machines, machines, production lines"
        />
      </Head>
      <Header
        packingMachine={packingMachine}
        productionLine={productionLine}
        cosmeticMachine={cosmeticMachine}
        blockMachine={blockMachine}
      />
      <div className={styles.whole__page}>
        <div className={styles.page__right}>
          <div className={styles.right__part}>
            <h2 className={styles.title}>Your Bookmarks</h2>
            <div className={styles.warning}>
              <p className={styles.warningText}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className={`bi bi-exclamation-triangle-fill ${styles.warningIcon}`}
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                &nbsp;Warning: The bookmars are not saved in any database. It is
                saved in your browser's local storage. So, these neither can be
                accessed from another device nor can be accessed from another
                browser of the same device. Clearing the local storage will
                clear the bookmarks section
              </p>
            </div>
            <div className={styles.saved__products}>
              {savedPacking.map((machine) => (
                <BookmarkLayout
                  id={machine.id}
                  image={machine.data.image1}
                  name={machine.data.name}
                  key={machine.id}
                  linkFirst={`packingmachines`}
                  type={"packingMachine"}
                  removeItem={removeItem}
                />
              ))}
              {savedLine.map((machine) => (
                <BookmarkLayout
                  id={machine.id}
                  image={machine.data.image1}
                  name={machine.data.name}
                  key={machine.id}
                  linkFirst={`foodproductionlines`}
                  type={"lineMachine"}
                  removeItem={removeItem}
                />
              ))}
              {savedCosmetic.map((machine) => (
                <BookmarkLayout
                  id={machine.id}
                  image={machine.data.image1}
                  name={machine.data.name}
                  key={machine.id}
                  linkFirst={`cosmeticmachine`}
                  type={"cosmeticMachine"}
                  removeItem={removeItem}
                />
              ))}
              {savedBlock.map((machine) => (
                <BookmarkLayout
                  id={machine.id}
                  image={machine.data.image1}
                  name={machine.data.name}
                  key={machine.id}
                  linkFirst={`blockmachine`}
                  type={"blockMachine"}
                  removeItem={removeItem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookmarks;
