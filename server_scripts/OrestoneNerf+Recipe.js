ServerEvents.recipes(event => {
  // 1. Remove existing crushing recipes that use orestones as input
  const orestones = [
    'create:asurine',
    'create:crimsite',
    'create:ochrum',
    'create:veridium'
  ]

  orestones.forEach(orestone => {
    event.remove({ type: 'create:crushing', input: orestone })
  })

 event.custom(
{
  "type": "create:mixing",
  "ingredients": [
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    {
      "type": "fluid_stack",
      "amount": 144,
      "fluid": "kubejs:molten_zinc"
    }
  ],
  "results": [
    {
      "count": 16,
      "id": "create:asurine"
    }
  ]
}
)
 event.custom(
{
  "type": "create:mixing",
  "ingredients": [
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    {
      "type": "fluid_stack",
      "amount": 144,
      "fluid": "kubejs:molten_copper"
    }
  ],
  "results": [
    {
      "count": 16,
      "id": "create:veridium"
    }
  ]
}
)
 event.custom(
{
  "type": "create:mixing",
  "ingredients": [
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    {
      "type": "fluid_stack",
      "amount": 144,
      "fluid": "kubejs:molten_iron"
    }
  ],
  "results": [
    {
      "count": 16,
      "id": "create:crimsite"
    }
  ]
}
)
 event.custom(
{
  "type": "create:mixing",
  "ingredients": [
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
        { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    { "item": "minecraft:smooth_stone" },
    {
      "type": "fluid_stack",
      "amount": 144,
      "fluid": "kubejs:molten_gold"
    }
  ],
  "results": [
    {
      "count": 16,
      "id": "create:ochrum"
    }
  ]
}
)
});