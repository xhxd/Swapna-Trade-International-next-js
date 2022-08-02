import styles from "../styles/aboutus.module.css";
import Header from "../components/Header";
import {
  packingMachineData,
  ProductionLineData,
  CosmeticMachineData,
  BlockMachineData,
} from "../lib/getData";

export async function getStaticProps() {
  var packingMachine = await packingMachineData();
  var productionLine = await ProductionLineData();
  var cosmeticMachine = await CosmeticMachineData();
  var blockMachine = await BlockMachineData();

  return {
    props: {
      packingMachine: packingMachine,
      productionLine: productionLine,
      cosmeticMachine: cosmeticMachine,
      blockMachine: blockMachine,
    },
  };
}

function Aboutus({
  packingMachine,
  productionLine,
  cosmeticMachine,
  blockMachine,
}) {
  return (
    <div>
      <Header
        packingMachine={packingMachine}
        productionLine={productionLine}
        cosmeticMachine={cosmeticMachine}
        blockMachine={blockMachine}
      />
      <div className={styles.aboutus}>
        <div className={styles.aboutus__description}>
          <h2 className="bg-transparent text-[18px] font-[600]">ABOUT US:</h2>
          <br />
          <br />
          <br />
          <h3 className="bg-transparent">Introduction</h3>
          <br />
          <p className="bg-transparent">
            Swapna Trade International was established in the year 2007 with a
            view to sources, supply and after sales services of the growing
            needs of machinery requirements of Bangladesh, which is aspiring to
            be a middle income nation in a decade or two. To achieve its goal,
            GOB is providing different incentive packages for national and
            international investors to set up different kinds of industries. As
            a result of the GOB policy support and entrepreneur's relentless
            effort Bangladesh has demonstrated rapid progress in setting up
            international standard small, medium and large industries in the
            field of textile, garments, leather, pharmaceuticals, ceramics,
            cosmetics, toiletries, food etc.
          </p>
          <br />
          <br />
          <p className="bg-transparent">
            To meet the growing requirements of machinery in different kind of
            industries, Swapna Trade Internationalacquire expertise in sourcing
            machinery in a competitive price from China, India, South Korea,
            Taiwan, Malaysia, Germany, UK, Russia etc. It has also well linkage
            of the reputed manufacturer of different kinds of machineries of
            these countries. Beyond the international principles, Swapna Trade
            International is well connected with the local manufacturer of
            machinery to meet the specific needs of each industry/factory. With
            the span of time,Swapna Trade Internationalhas gained expertise and
            is now confident to source, supply and to provide after sales
            service of the machinery in the area of food, cosmetics and
            pharmaceuticals machinery with competitive price.
          </p>
          <br />
          <br />
          <p className="bg-transparent">
            Swapna Trade International always on its toe to get latest
            technological development towards serving former and future clients.
          </p>
          <br />
          <br />
          <br />
          <h3 className="bg-transparent">Client List</h3>
          <br />
          <p className="bg-transparent">
            PRAN, AL-AMIN GROUP, DEKKO GROUP, SHEZAN GROUP, CRAZE FOOD.
          </p>
          <p className="bg-transparent">
            ACME, IBNE SINA PHARMACITICALS, BIO PHARMA, MEDICON, LEXICON.
          </p>
          <p className="bg-transparent">
            K&Q, SOUTH BENGAL FERTILIZER, ALAM SOAP FACTORY, SHIKDER GROUP,
            TRADESWORTH ASM CHEMICAL, AKIJ MOTORS, KAAF FOOD (PVT.) LTD., CHOICE
            FOOD, PARTEX GROUP, BANGLA MEAT, MILK VITA, COLOR COTTAGE etc.
          </p>
          <br />
          <br />
          <br />
          <h3 className="bg-transparent" id="contactButtonClick">
            Contact us
          </h3>
          <br />
          <div className={styles.contact__info}>
            <p className="bg-transparent">E-mail</p>
            <a href="mailto:srkarim2003@yahoo.com" className="bg-transparent">
              srkarim2003@yahoo.com
            </a>
          </div>
          <br />
          <div className={styles.contact__info}>
            <p className="bg-transparent">Phone no.</p>
            <a href="tel:+8801911476829" className="bg-transparent">
              +8801911476829
            </a>
          </div>
          <br />
          <div className={styles.contact__info}>
            <p className="bg-transparent">WhatsApp</p>
            <a
              href="https://wa.me/+8801911476829"
              target="_blank"
              className="bg-transparent"
            >
              +8801911476829
            </a>
          </div>
          <br />
          <div className={styles.contact__info}>
            <p className="bg-transparent">WeChat</p>
            <p className="bg-transparent">+8801911476829</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
