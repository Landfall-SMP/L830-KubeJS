ServerEvents.recipes(event => {

  //These recipes remove unwanted sources of renewable materials.

  event.remove({ id: 'create:splashing/soul_sand' }) //Source of gold and quartz

  event.remove({ id: 'create:splashing/red_sand' }) //Source of gold and dead bushes

  event.remove({ id: 'create:splashing/gravel' }) //Source of iron, clay, flint

  event.remove({ id: 'create:crushing/tuff' }) //Source of every metal

  event.remove({ id: 'create:crushing/tuff_recycling' }) //Source of every metal

  event.remove({ id: 'create_aquatic_ambitions:channeling/heart_of_the_sea'})
  event.remove({ mod: 'create_aquatic_ambitions', type: 'create:crushing'})
//Remove iron and gold as sources of redstone and quartz
  event.remove({ id: 'create:splashing/crushed_raw_gold'})
  event.remove({ id: 'create:splashing/crushed_raw_iron'})
  event.custom({
      "type": "create:splashing",
  "ingredients": [
    {
      "item": "create:crushed_raw_gold"
    }
  ],
  "results": [
    {
      "count": 9,
      "id": "minecraft:gold_nugget"
    },
    {
      "chance": 0.5,
      "id": "architects_palette:nether_brass_nugget"
    }
  ]
  })
  event.custom({
      "type": "create:splashing",
  "ingredients": [
    {
      "item": "create:crushed_raw_iron"
    }
  ],
  "results": [
    {
      "count": 9,
      "id": "minecraft:iron_nugget"
    },
    {
      "chance": 0.5,
      "id": "architects_palette:sunmetal_blend"
    }
  ]
  })



  console.log('Hello! The RemoveRenewables event has fired!')
})