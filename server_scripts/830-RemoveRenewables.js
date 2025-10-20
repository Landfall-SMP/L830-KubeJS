ServerEvents.recipes(event => {

  //These recipes remove unwanted sources of renewable materials.

  event.remove({ id: 'create:splashing/soul_sand' }) //Source of gold and quartz

  event.remove({ id: 'create:splashing/red_sand' }) //Source of gold and dead bushes



  event.remove({ id: 'create:crushing/tuff' }) //Source of every metal

  event.remove({ id: 'create:crushing/tuff_recycling' }) //Source of every metal
  event.remove({ id: 'create:crushing/diorite' }) //Source of quartz
  event.remove({ id: 'farmersdelight:cutting/quartz_block' }) //Source of quartz
  event.remove({ id: 'create:crushing/diorite_recycling' }) //Source of quartz
  event.remove({ id: 'create:crushing/amethyst_cluster' }) //amethyst dupe







  console.log('Hello! The RemoveRenewables event has fired!')
})