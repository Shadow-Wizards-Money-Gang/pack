
console.info('Hello, World! (Loaded server scripts)')
ServerEvents.recipes(event => { //listen for the "recipes" server event.
  event.shaped(
  Item.of('minecraft:chainmail_chestplate', 1), // arg 1: output
  [
    'A A',
    'CAC', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'minecraft:iron_nugget',
    C: 'minecraft:chain'
  }
)
event.shaped(
  Item.of('minecraft:name_tag', 1), // arg 1: output
  [
    '  A',
    ' C ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'minecraft:paper',
    B: 'minecraft:stick',
    C: 'minecraft:chain'
  }
)
event.shaped(
  Item.of('minecraft:chainmail_leggings', 1), // arg 1: output
  [
    'AAA',
    'C C', // arg 2: the shape (array of strings)
    'A A'
  ],
  {
    A: 'minecraft:iron_nugget',
    C: 'minecraft:chain'
  }
)
event.shaped(
  Item.of('minecraft:chainmail_helmet', 1), // arg 1: output
  [
    'ACA',
    'A A', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'minecraft:iron_nugget',
    C: 'minecraft:chain'
  }
)
event.shaped(
  Item.of('minecraft:chainmail_boots', 1), // arg 1: output
  [
    'C C',
    'A A', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'minecraft:iron_nugget',
    C: 'minecraft:chain'
  }
)

let minerals = ["ruby", "topaz", "citrine", "jade", "sapphire", "tanzanite"]
minerals.forEach(element => {
  event.replaceInput(
    { input: 'minecraft:netherite_ingot' }, // Arg 1: the filter
    'minecraft:netherite_ingot',            // Arg 2: the item to replace
    'aylyth:esstline'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )
});

})
