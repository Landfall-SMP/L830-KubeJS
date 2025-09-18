ServerEvents.recipes(event => {
event.remove({ id: 'advancedperipherals:chunk_controller'})
event.remove({ type: 'createoreexcavation:vein' })
event.remove({ type: 'createoreexcavation:drilling' })
event.remove({ type: 'createoreexcavation:extracting' })
event.custom(
{
  "type": "createoreexcavation:vein",
  "amountMultiplierMax": 2.0,
  "amountMultiplierMin": 1.0,
  "biomeWhitelist": "minecraft:is_overworld",
  "finite": "always",
  "amountMultiplierMin": 0.5,
  "amountMultiplierMax": 0.20,
  "icon": {
    "count": 1,
    "id": "landfallessentials:crude_oil_bucket"
  },
  "name": "{\"translate\":\"fluid.landfallessentials.crude_oil\"}",
  "placement": {
    "salt": 1195889335,
    "separation": 8,
    "spacing": 16
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
    "amount": 500,
    "id": "landfallessentials:crude_oil"
  },
  "priority": 1,
  "stress": 256,
  "ticks": 20,
  "veinId": "landfall:oil_vein"
}
)
})