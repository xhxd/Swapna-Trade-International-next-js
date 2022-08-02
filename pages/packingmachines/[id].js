import { packingMachineData } from "../../lib/getData";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import Header from "../../components/Header";
import styles from "../../styles/packingMachineDetails.module.css";
import Head from "next/head";

export async function getStaticPaths() {
  var packingMachine = await packingMachineData();
  var packingMachineId = [];
  packingMachine.map((machine) => {
    packingMachineId.push({ params: { id: machine.id } });
  });

  return {
    paths: packingMachineId,
    fallback: false,
  };
}

export async function getStaticProps(content) {
  const docRef = doc(db, "Packing Machine", `${content.params.id}`);
  const docSnap = await getDoc(docRef);

  return {
    props: {
      docSnap: { id: docSnap.id, data: docSnap.data() },
    },
  };
}

const packingMachinesDetails = ({ docSnap }) => {
  const saveMachine = (machineID) => {
    const localStorage = window.localStorage;

    var machines = [];
    var presentMachines = [];

    if (localStorage.getItem("packingMachine") == null) {
      machines = [];
      machines.push(machineID);
      localStorage.setItem("packingMachine", JSON.stringify(machines));
    } else {
      presentMachines = JSON.parse(localStorage.getItem("packingMachine"));

      const truthVerifier = (element) => element == machineID;
      var truth = presentMachines.some(truthVerifier);

      if (truth) {
        return;
      } else {
        presentMachines.push(machineID);
        localStorage.setItem("packingMachine", JSON.stringify(presentMachines));
      }
    }
  };

  var tableDataAll = "";

  const tableData = () => {
    for (let data in docSnap.data.table) {
      var datahtml = `<tr><td>${data}</td><td>${docSnap.data.table[data]}</td></tr>`;
      tableDataAll += datahtml;
    }

    return { __html: `${tableDataAll}` };
  };

  return (
    <div className="bg-[#dddddd]">
      <Head>
        <title>
          Swapna Trade International | Packing Machine | {docSnap.data.name}
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
      <div className={styles.machine__detailsAll}>
        <div className={styles.machine__details}>
          <div className={styles.productDetails__top}>
            <div className={styles.image__1}>
              <img src={docSnap.data.image1} alt="" />
            </div>
            <div className={styles.all__description}>
              <div className={styles.name}>
                <h3 className="bg-white font-[600] text-[18px]">
                  {docSnap.data.name}
                </h3>
              </div>
              <br />
              <br />
              <div className={styles.model__number}>
                <p className="bg-white">Model Number: {docSnap.data.model}</p>
              </div>
              <br />
              <br />
              <div className={styles.description}>
                <h3 className="bg-white font-[600] text-[15px]">Description</h3>
                <p className="bg-white">{docSnap.data.description}</p>
              </div>
            </div>
            <div className={styles.contact}>
              <h3 className="bg-white font-[600] text-[18px]">
                Contact us to get a detailed quotation with price
              </h3>
              <br />
              <div className={styles.contact__info}>
                <p className="bg-white">E-mail</p>
                <a href="mailto:srkarim2003@yahoo.com">srkarim2003@yahoo.com</a>
              </div>
              <div className={styles.contact__info}>
                <p className="bg-white">Phone no.</p>
                <a href="tel:+8801911476829">+8801911476829</a>
              </div>
              <div className={styles.contact__info}>
                <p className="bg-white">WhatsApp</p>
                <a
                  href="https://wa.me/+8801911476829"
                  target="_blank"
                  rel="noreferrer"
                >
                  +8801911476829
                </a>
              </div>
              <div className={styles.contact__info}>
                <p className="bg-white">WeChat</p>
                <p className="bg-white">+8801911476829</p>
              </div>
              <br />
              <br />
              <div
                className={styles.save__part}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className={styles.save__button}
                  data-productname="${item.name}"
                  data-productimage="${item.image}"
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
                      className={`bi bi-bookmarks p-[0px] bg-transparent`}
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                      <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                    </svg>
                  </div>
                  <div className={styles.save__text}>
                    <h4 className="bg-white">SAVE</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productDetails__bottom}>
            <table
              className={styles.dataTable}
              dangerouslySetInnerHTML={tableData()}
            />
            <img src={docSnap.data.image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default packingMachinesDetails;
