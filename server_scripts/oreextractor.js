ServerEvents.recipes(event => {
event.remove({ id: 'advancedperipherals:chunk_controller'})
event.remove({ type: 'createoreexcavation:vein' })
event.remove({ type: 'createoreexcavation:drilling' })
event.remove({ type: 'createoreexcavation:extracting' })
event.custom(
{
  "type": "createoreexcavation:vein",
  "amountMultiplierMax": 40.0,
  "amountMultiplierMin": 35.0,
  "biomeWhitelist": "c:is_ocean",
  "finite": "always",
  "icon": {
    "count": 1,
    "id": "landfallessentials:crude_oil_bucket"
  },
  "name": "{\"translate\":\"fluid.landfallessentials.crude_oil\"}",
  "placement": {
    "salt": 1195889335,
    "separation": 16,
    "spacing": 32
  },
  "priority": 0
}
).id("landfall:oil_vein");
event.custom(
{
  "type": "createoreexcavation:extracting",
  "drill": {
    "tag": "createoreexcavation:drills"
  },
  "output": {
    "amount": 100,
    "id": "landfallessentials:crude_oil"
  },
  "priority": 1,
  "stress": 256,
  "ticks": 400,
  "veinId": "landfall:oil_vein"
}
)
	event.recipes.createoreexcavation.vein('{"text": "Gold Node"}', 'landfallessentials:extracted_gold_clump')
		.placement(16, 8, 6894685).veinSize(3, 8.5).biomeWhitelist('landfall:renewable_gold')
		.id("landfall:gold_vein")
	event.recipes.createoreexcavation.drilling('landfallessentials:extracted_gold_clump', 'landfall:gold_vein', 100)
		.stress(512).id("landfall:gold_extraction");

	event.recipes.createoreexcavation.vein('{"text": "Copper Node"}', 'landfallessentials:extracted_copper_clump')
        	.placement(16, 8, 6894685).veinSize(3, 8.5).biomeWhitelist('landfall:renewable_copper')
        	.id("landfall:copper_vein")
    event.recipes.createoreexcavation.drilling('landfallessentials:extracted_copper_clump', 'landfall:copper_vein', 100)
        	.stress(512).id("landfall:copper_extraction");

    event.recipes.createoreexcavation.vein('{"text": "Diamond Node"}', 'landfallessentials:extracted_diamond_clump')
    		.placement(16, 8, 6894685).veinSize(3, 8.5).biomeWhitelist('landfall:renewable_diamond')
    		.id("landfall:diamond_vein")
    	event.recipes.createoreexcavation.drilling('landfallessentials:extracted_diamond_clump', 'landfall:diamond_vein', 100)
    		.stress(512).id("landfall:diamond_extraction");

    		  event.recipes.createoreexcavation.vein('{"text": "Anceint Debris Node"}', 'minecraft:ancient_debris')
                		.placement(100, 50, 6894685).alwaysFinite().veinSize(3, 8.5).biomeWhitelist('c:is_nether')
                		.id("landfall:netherite_vien")
                	event.recipes.createoreexcavation.drilling('minecraft:ancient_debris', 'landfall:netherite_vien', 300)
                		.stress(1024).id("landfall:netherite_extraction");


    event.recipes.createoreexcavation.vein('{"text": "Lapis Node"}', 'landfallessentials:extracted_lapis_clump')
    		.placement(16, 8, 6894685).veinSize(3, 8.5).biomeWhitelist('landfall:renewable_lapis')
    		.id("landfall:lapis_vein")
    	event.recipes.createoreexcavation.drilling('landfallessentials:extracted_lapis_clump', 'landfall:lapis_vein', 100)
    		.stress(512).id("landfall:lapis_extraction");

    event.recipes.createoreexcavation.vein('{"text": "Quartz Node"}', 'landfallessentials:extracted_quartz_clump')
    		.placement(16, 8, 6894685).veinSize(3, 8.5).biomeWhitelist('landfall:renewable_quartz')
    		.id("landfall:quartz_vein")
    	event.recipes.createoreexcavation.drilling('landfallessentials:extracted_quartz_clump', 'landfall:quartz_vein', 100)
    		.stress(512).id("landfall:quartz_extraction");

    event.recipes.createoreexcavation.vein('{"text": "Zinc Node"}', 'landfallessentials:extracted_zinc_clump')
    		.placement(4, 2, 6894685).veinSize(3, 8.5).biomeWhitelist('landfall:renewable_zinc')
    		.id("landfall:zinc_vein")
    	event.recipes.createoreexcavation.drilling('landfallessentials:extracted_zinc_clump', 'landfall:zinc_vein', 100)
    		.stress(512).id("landfall:zinc_extraction");
})