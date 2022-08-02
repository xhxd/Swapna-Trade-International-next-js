import PackingMachine from "./PackingMachine";

const PackingMachines = ({ machineData }) => {
  console.log(machineData);
  return (
    <div className="flex flex-wrap bg-transparent justify-center m-[40px]">
      {machineData.map((Data) => (
        <PackingMachine
          image={Data.data.image1}
          name={Data.data.name}
          id={Data.id}
          key={Data.id}
        />
      ))}
    </div>
  );
};

export default PackingMachines;
