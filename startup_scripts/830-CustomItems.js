//Priority: 5
StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('raw_lapis_lazuli')
  event.create('incomplete_lapis')
  event.create('incomplete_redstone')
  event.create('partially_polished_gem')
  event.create('unkindled_burner')
})