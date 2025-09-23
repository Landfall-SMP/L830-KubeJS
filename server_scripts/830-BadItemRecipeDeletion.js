ServerEvents.recipes(event => {
event.remove({ id: 'advancedperipherals:chunk_controller'}),
event.remove({ id: 'create_mechanical_extruder:extruding/andesite'}),
event.remove({ id: 'create_mechanical_extruder:extruding/granite'}),
event.remove({ id: 'create_mechanical_extruder:extruding/diorite'}),
event.remove({ id: 'create_mechanical_extruder:extruding/advanced_netherrack'}),
event.remove({ id: 'create_mechanical_extruder:extruding/advanced_end_stone'}),
event.remove({ id: 'create_mechanical_extruder:extruding/obsidian'}),
event.remove({ id: 'create_mechanical_extruder:extruding/end_stone'})
event.remove({ id: 'minecraft:enchanting_table'})

})