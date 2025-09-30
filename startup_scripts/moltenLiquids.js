const fluid_properties = {
  copper: { color: copper },
  iron: { color: iron },
  gold: { color: gold },/*
  tin: { color: tin },
  silver: { color: silver },
  lead: { color: lead },
  nickel: { color: nickel },
  steel: { color: steel },
  aluminum: { color: aluminum },
  electrum: { color: electrum },
  constantan: { color: constantan },
  osmium: { color: osmium },
  bronze: { color: bronze },*/
  zinc: { color: zinc },
/*
  brass: { color: brass },
  enderium: { color: enderium },
  lumium: { color: lumium },
  invar: { color: invar },
  redstone_slurry: { color: redstone_slurry },
  uranium: { color: uranium },
  aqua_regia: {color: aqua_regia},
  abyssal_brine: {color: abyssal_brine},
  crystaline_polish: {color: crystaline_polish},*/
};

global.fluid_mats = [
  "copper",
  "iron",
  "gold",
 /* "tin",
  "silver",
  "lead",
  "nickel",
  "steel",
  "aluminum",
  "electrum",
  "constantan",
  "osmium",
  "bronze",*/
  "zinc",/*
  "brass",
  "enderium",
  "lumium",
  "invar",
  "redstone_slurry",
  "uranium",*/
];
global.fluid_customs = [

];

StartupEvents.registry("fluid", (event) => {
  for (const mat of global.fluid_mats) {
    event
      .create(`molten_${mat}`, 'thick')
      .tint(fluid_properties[mat].color)

      .noBlock();

  }
  
});
StartupEvents.registry("fluid", (event) => {
  for (const mat of global.fluid_customs) {
    event
      .create(`${mat}`, 'thin')
      .tint(fluid_properties[mat].color)

      .noBlock();

  }
});
