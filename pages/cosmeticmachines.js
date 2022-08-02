import { useState, useEffect } from "react";
import Header from "../components/Header";
import CosmeticMachines from "../components/CosmeticMachines";
import Sidebar from "../components/Sidebar";
import Slideshow from "../components/Slideshow";

import {
  packingMachineData,
  ProductionLineData,
  FoodEquipmentData,
  CosmeticMachineData,
  BlockMachineData,
} from "../lib/getData";
import { headerSearch } from "../lib/headerSearch";
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

export default function allCosmeticMachines({
  packingMachine,
  productionLine,
  foodEquipment,
  cosmeticMachine,
  blockMachine,
}) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const giveSearchBar = () => {
    if (windowSize.width < 1022) {
      return (
        <div>
          <div
            className={`float-right my-[20px] mx-[50px] flex items-center h-[39px] w-[200px] bg-white rounded-[10px] shadow-[10px_10px_10px_#f6f6f6]`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search my-0 mx-[10px] text-[#797979]"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className={`border-none h-[30px] text-[15px] focus:outline-none bg-white searchInput`}
            />
          </div>
          <div className="searchDivHtml" id="searchResult" tabIndex={0}></div>
        </div>
      );
    } else {
      return;
    }
  };

  headerSearch(
    packingMachine,
    productionLine,
    cosmeticMachine,
    blockMachine,
    input,
    windowSize
  );

  return (
    <div>
      <Head>
        <title>Swapna Trade International | Cosmetic Machines</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Buy high quality food machines, cosmetic machines, block machines ets."
        />
        <meta name="keywords" content="cosmetic machines" />
      </Head>
      <Header
        packingMachine={packingMachine}
        productionLine={productionLine}
        cosmeticMachine={cosmeticMachine}
        blockMachine={blockMachine}
      />
      <div className="flex">
        <div className="md:w-[20%]">
          <Sidebar />
        </div>
        <div className="md:w-[80%] w-[100%]">
          {giveSearchBar()}
          <Slideshow />

          <div className={`cosmeticMachines m-[40px]`}>
            <div
              className={`machineDisplay bg-transparent flex flex-wrap justify-center`}
            >
              {cosmeticMachine.map((machine) => (
                <CosmeticMachines
                  key={machine.id}
                  name={machine.data.name}
                  image={machine.data.image1}
                  id={machine.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
