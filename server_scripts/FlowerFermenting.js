ServerEvents.recipes(event => {
  const flowers = [
    "minecraft:dandelion",
    "minecraft:poppy",
    "minecraft:blue_orchid",
    "minecraft:allium",
    "minecraft:azure_bluet",
    "minecraft:red_tulip",
    "minecraft:orange_tulip",
    "minecraft:white_tulip",
    "minecraft:pink_tulip",
    "minecraft:oxeye_daisy",
    "minecraft:cornflower",
    "minecraft:lily_of_the_valley",
    "minecraft:sunflower",
    "minecraft:lilac",
    "minecraft:rose_bush",
    "minecraft:peony"
  ];

  flowers.forEach(flower => {
    event.custom({
      type: "brewinandchewin:fermenting",
      base_fluid: {
        amount: 1000,
        ingredient: {
          tag: "#c:water"
        },
        unit: "millibuckets"
      },
      category: "meals",
      experience: 1.0,
      ingredients: [
        { item: "minecraft:coarse_dirt" },
        { item: "minecraft:bone_meal" },
        {item: "farmersdelight:rich_soil"},
        { item: flower },
        ],
      result: {
        count: 8,
        id: flower
      },
      temperature: 4,
      unit: "millibuckets"
    });
  });
});