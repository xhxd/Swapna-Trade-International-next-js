import db from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";

export async function packingMachineData() {
  const packingMachine = [];
  const collectionRef = collection(db, "Packing Machine");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    packingMachine.push({ id: doc.id, data: doc.data() });
    console.log(doc.data());
  });

  return packingMachine;
}

export async function ProductionLineData() {
  const ProductionLine = [];
  const collectionRef = collection(db, "Production Line");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    ProductionLine.push({ id: doc.id, data: doc.data() });
    console.log(doc.data());
  });

  return ProductionLine;
}

export async function FoodEquipmentData() {
  const FoodEquipment = [];
  const collectionRef = collection(db, "Food Equipments");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    FoodEquipment.push({ id: doc.id, data: doc.data() });
    console.log(doc.data());
  });

  return FoodEquipment;
}

export async function CosmeticMachineData() {
  const CosmeticMachine = [];
  const collectionRef = collection(db, "Cosmetic Machines");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    CosmeticMachine.push({ id: doc.id, data: doc.data() });
    console.log(doc.data());
  });

  return CosmeticMachine;
}

export async function BlockMachineData() {
  const BlockMachine = [];
  const collectionRef = collection(db, "Block Machine");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    BlockMachine.push({ id: doc.id, data: doc.data() });
    console.log(doc.data());
  });

  return BlockMachine;
}
