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


});