const { MODE } = require("./blendMode.js");
const description =
  "Pharo NFT Collection v1";
const baseUri = "";

const layerConfigurations = [
  {
  // Common
    growEditionSizeTo: 5, //4790,
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
  // Rare
  {
    growEditionSizeTo: 3, //200,
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
    growEditionSizeTo: 1, //50,
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
