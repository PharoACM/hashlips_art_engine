const { MODE } = require("./blendMode.js");
const description =
  "Pharo NFT Collection v1";
const baseUri = "ipfs://QmNfPMWLPTEbFpBtPFy4wkYEHRVWcz8dzjziTcPbebzF53";

const layerConfigurations = [
  {
    // Common
    growEditionSizeTo: 4900,
    layersOrder: [
      { name: "Background" },
      { name: "Silouette" },
      { name: "Body" },
      { name: "Clothes" },
      { name: "Belt" },
      { name: "Accessory" },
      { name: "Head" },
      { name: "Eyes" },
    ],
  },
  // Rare
  // {
  //   growEditionSizeTo: 100,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "" },
  //   ],
  // },
  // Super Rare
  // {
  //   growEditionSizeTo: 40,
  //   layersOrder: [
  //     { name: "Background" },
  //   ],
  // },
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
