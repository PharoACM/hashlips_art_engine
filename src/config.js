const { MODE } = require("./blendMode.js");
const description =
  "Pharo NFT Collection ~ Pharos is a collection of 5040 uniquely created on the Ethereum blockchain and will be used to support the Pharo DAO.";
const baseUri = "";

const layerConfigurations = [
  {
  // Common w/ accessory
    growEditionSizeTo: 5, //2000,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Clothes" },
      { name: "Belt" },
      { name: "Accessory" },
      { name: "Head" },
      { name: "Eyes" },
    ],
  },
  {
    // Common w/o accessory
      growEditionSizeTo: 10, //4790,
      layersOrder: [
        { name: "Background" },
        { name: "Body" },
        { name: "Clothes" },
        { name: "Belt" },
        { name: "Head" },
        { name: "Eyes" },
      ],
    },
  // Rare
  {
    growEditionSizeTo: 13, //4990,
    layersOrder: [
      { name: "BackgroundRare" },
      { name: "BodyRare" },
      { name: "ClothesRare" },
      { name: "BeltRare" },
      { name: "AccessoryRare" },
      { name: "HeadRare" },
      { name: "Eyes" },
    ],
  },
  // Super Rare
  {
    growEditionSizeTo: 14, //5040,
    layersOrder: [
      { name: "BackgroundSuperRare" },
      { name: "BodySuperRare" },
      { name: "ClothesSuperRare" },
      { name: "Silouette" },
      { name: "BeltSuperRare" },
      { name: "AccessorySuperRare" },
      { name: "HeadSuperRare" },
      { name: "Eyes" },
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 200;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
