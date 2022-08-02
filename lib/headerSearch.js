import { useState, useEffect } from "react";

export const headerSearch = (
  packingMachine,
  productionLine,
  cosmeticMachine,
  blockMachine,
  input,
  windowSize
) => {
  const [headerMount, setHeadderMount] = useState(false);

  useEffect(() => {
    if (windowSize.width < 1022) {
      if (headerMount) {
        document
          .querySelector(".searchInput")
          .addEventListener("focus", function () {
            document.querySelector(".searchDivHtml").style.visibility =
              "visible";
          });

        document
          .querySelector(".searchInput")
          .addEventListener("focusout", function () {
            document.addEventListener("click", (e) => {
              var isClickInsideElement = document
                .querySelector(".searchDivHtml")
                .contains(e.target);
              if (!isClickInsideElement) {
                if (document.querySelector(".searchInput").contains(e.target)) {
                  return;
                } else {
                  document.querySelector(".searchDivHtml").style.visibility =
                    "hidden";
                }
              }
            });
          });
      }
    }
  });

  useEffect(() => {
    if (headerMount) {
      if (windowSize.width < 1022) {
        const getSearchResult = () => {
          const filterdPackingMachine = packingMachine.filter((machine) => {
            return machine.data.name
              .toLowerCase()
              .includes(input.toLowerCase());
          });

          const filterdProductionLine = productionLine.filter((machine) => {
            return machine.data.name
              .toLowerCase()
              .includes(input.toLowerCase());
          });

          const filterdCosmeticMachine = cosmeticMachine.filter((machine) => {
            return machine.data.name
              .toLowerCase()
              .includes(input.toLowerCase());
          });

          const filterdBlockMachine = blockMachine.filter((machine) => {
            return machine.data.name
              .toLowerCase()
              .includes(input.toLowerCase());
          });

          return [
            filterdPackingMachine,
            filterdProductionLine,
            filterdCosmeticMachine,
            filterdBlockMachine,
          ];
        };

        //Rendering the data
        const giveDiv = () => {
          var htmlS = "";

          getSearchResult()[0].map((result) => {
            htmlS += `
            <a href='/packingmachines/${result.id}' target="_blank">
            <div>
              <p>${result.data.name.slice(0, 20)}...</p>
              <img src=${result.data.image1} alt="" />
            </div>
            </a>
            `;
          });

          getSearchResult()[1].map((result) => {
            htmlS += `
          <a href='/foodproductionlines/${result.id}' target="_blank">
          <div>
            <p>${result.data.name.slice(0, 20)}...</p>
            <img src=${result.data.image1} alt="" />
          </div>
          </a>
          `;
          });

          getSearchResult()[2].map((result) => {
            htmlS += `
        <a href='/cosmeticmachine/${result.id}' target="_blank">
        <div>
          <p>${result.data.name.slice(0, 20)}...</p>
          <img src=${result.data.image1} alt="" />
        </div>
        </a>
        `;
          });

          getSearchResult()[3].map((result) => {
            htmlS += `
      <a href='/blockmachine/${result.id}' target="_blank">
      <div>
        <p>${result.data.name.slice(0, 20)}...</p>
        <img src=${result.data.image1} alt="" />
      </div>
      </a>
      `;
          });

          document.getElementById("searchResult").innerHTML = htmlS;
        };

        giveDiv();
      }
    } else {
      setHeadderMount(true);

      console.log(packingMachine);
    }
  }, [headerMount, input]);
};
