const { MODE } = require("./blendMode.js");
const description =
  "Pharo NFT Collection v1";
const baseUri = "ipfs://QmNfPMWLPTEbFpBtPFy4wkYEHRVWcz8dzjziTcPbebzF53";

const layerConfigurations = [
  {
    // Super Rare
    growEditionSizeTo: 5,
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
  //   growEditionSizeTo: 30,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "" },
  //   ],
  // },
  // Commons
  // {
  //   growEditionSizeTo: 675,
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
