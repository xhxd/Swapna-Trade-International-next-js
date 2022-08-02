import { CosmeticMachineData } from "../../lib/getData";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import Header from "../../components/Header";
import styles from "../../styles/productionlineDetails.module.css";
import Head from "next/head";

export async function getStaticPaths() {
  var cosmeticMachine = await CosmeticMachineData();
  var cosmeticMachineId = [];
  cosmeticMachine.map((machine) => {
    cosmeticMachineId.push({ params: { id: machine.id } });
  });

  return {
    paths: cosmeticMachineId,
    fallback: false,
  };
}

export async function getStaticProps(content) {
  const docRef = doc(db, "Cosmetic Machines", `${content.params.id}`);
  const docSnap = await getDoc(docRef);

  return {
    props: {
      docSnap: { id: docSnap.id, data: docSnap.data() },
    },
  };
}

const cosmeticMachineDetails = ({ docSnap }) => {
  const saveProduction = () => {};
  const saveMachine = (machineID) => {
    const localStorage = window.localStorage;

    var machines = [];
    var presentMachines = [];

    if (localStorage.getItem("cosmeticMachine") == null) {
      machines = [];
      machines.push(machineID);
      localStorage.setItem("cosmeticMachine", JSON.stringify(machines));
    } else {
      presentMachines = JSON.parse(localStorage.getItem("cosmeticMachine"));

      const truthVerifier = (element) => element == machineID;
      var truth = presentMachines.some(truthVerifier);

      if (truth) {
        return;
      } else {
        presentMachines.push(machineID);
        localStorage.setItem(
          "cosmeticMachine",
          JSON.stringify(presentMachines)
        );
      }
    }
  };

  return (
    <div>
      <Head>
        <title>
          Swapna Trade International | Cosmetic Machine | {docSnap.data.name}
        </title>
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
      <Header />
      <div className={styles.foodProductionLinesDetails}>
        <div className={styles.production__details}>
          <div className={styles.productionDetails__top}>
            <div className={styles.production__image}>
              <img src={docSnap.data.image1} alt={docSnap.data.name} />
            </div>
            <div className={styles.production__contacting}>
              <div className={styles.production__name}>
                <h2 className={`text-center bg-white`}>{docSnap.data.name}</h2>
              </div>
              <br />
              <h3 className={`text-center`}>
                Contact us to get a detailed quotation with price
              </h3>
              <br />
              <table className={styles.tableData}>
                <tbody>
                  <tr>
                    <td>E-mail</td>
                    <td>
                      <a
                        href="mailto:srkarim2003@yahoo.com"
                        className={`text-[#f74258] text-base`}
                      >
                        srkarim2003@yahoo.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone no.</td>
                    <td>
                      <a
                        href="tel:+8801911476829"
                        className={`text-[#f74258] text-base bg-transparent`}
                      >
                        +8801911476829
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>WhatsApp</td>
                    <td>
                      <a
                        href="https://wa.me/+8801911476829"
                        target="_blank"
                        className={`text-[#f74258] text-base`}
                      >
                        +8801911476829
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>WeChat</td>
                    <td className={`text-[#f74258] text-base`}>
                      +8801911476829
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                className={styles.save__part}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "60%",
                  marginTop: "20px",
                }}
              >
                <div
                  className={styles.save__button}
                  onClick={() => {
                    saveMachine(docSnap.id);
                  }}
                >
                  <div className={styles.save__icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className={`bi bi-bookmarks ${styles.productionLineBookmark}`}
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                      <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                    </svg>
                  </div>
                  <div className={styles.save__text}>
                    <h4>SAVE</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productionDetails__bottom}>
            <div className={styles.production__description}>
              <strong>
                <p className="bg-transparent">Product Description:</p>
              </strong>
              <p className="bg-transparent">{docSnap.data.description}</p>
            </div>
            <br />
            <div className={styles.production__specs}>
              <strong>Raw Material: </strong>
              {docSnap.data.rawMaterials}
            </div>
            <br />
            <div className={styles.production__specs}>
              <strong>Final Products: </strong>
              {docSnap.data.finalProducts}
            </div>
            <br />
            <div className={styles.production__specs}>
              <strong>Machine Material: </strong>
              {docSnap.data.machineMaterial}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cosmeticMachineDetails;
