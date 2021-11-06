const { MODE } = require("./blendMode.js");
const description =
  "Pharo NFT Collection ~ Pharo is a collection of 5040 uniquely created Pharos living on the Ethereum blockchain " +
  "and will be used to support the Pharo DAO. Pharo NFT's will allow its holders to access certain perks and rewards " +
  "from the Pharo Protocol and Community.";
const baseUri = "";

const layerConfigurations = [
  // Super Rare
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "BackgroundSuperRare" },
      { name: "BodySuperRare" },
      { name: "ClothesSuperRare" },
      { name: "Silouette" },
      { name: "BeltSuperRare" },
      { name: "AccessorySuperRare" },
      { name: "Jewelry" },
      { name: "HeadSuperRare" },
      { name: "Eyes" },
    ],
  },
  // SuperRare no Accessory
  {
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "BackgroundSuperRare" },
      { name: "BodySuperRare" },
      { name: "ClothesSuperRare" },
      { name: "Silouette" },
      { name: "BeltSuperRare" },
      { name: "HeadSuperRare" },
      { name: "Eyes" },
    ],
  },
  // Rare No Accessory
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "BackgroundRare" },
      { name: "BodyRare" },
      { name: "ClothesRare" },
      { name: "BeltRare" },
      { name: "HeadRare" },
      { name: "Eyes" },
    ],
  },
  // Rare
  {
    growEditionSizeTo: 900,
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
  // Common w/ accessory
  {
    growEditionSizeTo: 2140,
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
  // Common w/o accessory
  {
    growEditionSizeTo: 5040,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Clothes" },
      { name: "Belt" },
      { name: "Head" },
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

const preview = {
  thumbPerRow: 10,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
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
  preview,
};
