ItemEvents.entityInteracted('minecraft:bucket', event => {
console.info(event.target.components) })


ItemEvents.entityInteracted('minecraft:bucket', event => {
  if(event.target.type != 'minecraft:goat') return
  event.item.count--
  event.player.giveInHand('minecraft:milk_bucket')
  event.target.playSound('minecraft:entity.cow.milk')
})
ItemEvents.entityInteracted('minecraft:bucket', event => {
  if(event.target.type != 'minecraft:llama') return
  event.item.count--
  event.player.giveInHand('minecraft:milk_bucket')
  event.target.playSound('minecraft:entity.cow.milk')
})
ItemEvents.entityInteracted(event => {
  if(event.target.type != 'minecraft:villager') return
  event.cancel();
})

LootJS.lootTables(event => {
    event.modifyEntityTables("minecraft:goat").createPool(pool => {
                pool.addEntry(
            LootEntry.of("minecraft:mutton").setCount([1, 3]))
})
    })