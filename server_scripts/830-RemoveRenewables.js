ServerEvents.recipes(event => {

  //These recipes remove unwanted sources of renewable materials.

  event.remove({ id: 'create:splashing/soul_sand' }) //Source of gold and quartz

  event.remove({ id: 'create:splashing/red_sand' }) //Source of gold and dead bushes



  event.remove({ id: 'create:crushing/tuff' }) //Source of every metal

  event.remove({ id: 'create:crushing/tuff_recycling' }) //Source of every metal







  console.log('Hello! The RemoveRenewables event has fired!')
})