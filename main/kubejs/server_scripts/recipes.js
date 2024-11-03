console.info("Hello, World! (Loaded server scripts)");
ServerEvents.recipes((event) => {
  event.shaped(
    Item.of("minecraft:name_tag", 1), // arg 1: output
    [
      "  A",
      " C ", // arg 2: the shape (array of strings)
      "B  ",
    ],
    {
      A: "minecraft:paper",
      B: "minecraft:stick",
      C: "minecraft:chain",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:chain_chestplate", 1), // arg 1: output
    [
      "A A",
      "CBC", // arg 2: the shape (array of strings)
      "ACA",
    ],
    {
      A: "minecraft:iron_nugget",
      B: "shadow-wizards:gamberson_chestplate",
      C: "minecraft:chain",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:chain_leggings", 1), // arg 1: output
    [
      "AAA",
      "CBC", // arg 2: the shape (array of strings)
      "A A",
    ],
    {
      A: "minecraft:iron_nugget",
      B: "shadow-wizards:gamberson_leggings",
      C: "minecraft:chain",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:chain_helmet", 1), // arg 1: output
    [
      "ACA",
      "A A", // arg 2: the shape (array of strings)
      "   ",
    ],
    {
      A: "minecraft:iron_nugget",
      C: "minecraft:chain",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:chain_boots", 1), // arg 1: output
    [
      "C C",
      "A A", // arg 2: the shape (array of strings)
      "   ",
    ],
    {
      A: "minecraft:iron_nugget",
      C: "minecraft:chain",
    },
  );

  event.shaped(
    Item.of("shadow-wizards:gamberson_helmet", 1), // arg 1: output
    [
      "ACA",
      "A A", // arg 2: the shape (array of strings)
      "   ",
    ],
    {
      A: "minecraft:leather",
      C: "minecraft:leather",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:gamberson_chestplate", 1), // arg 1: output
    [
      "A A",
      "CCC", // arg 2: the shape (array of strings)
      "ACA",
    ],
    {
      A: "minecraft:leather",
      C: "minecraft:leather",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:gamberson_leggings", 1), // arg 1: output
    [
      "AAA",
      "C C", // arg 2: the shape (array of strings)
      "A A",
    ],
    {
      A: "minecraft:leather",
      C: "minecraft:leather",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:gamberson_boots", 1), // arg 1: output
    [
      "C C",
      "A A", // arg 2: the shape (array of strings)
      "   ",
    ],
    {
      A: "minecraft:leather",
      C: "minecraft:leather",
    },
  );

  event.shaped(
    Item.of("shadow-wizards:tier_2_helmet", 1), // arg 1: output
    [
      "AAA",
      "ACA", // arg 2: the shape (array of strings)
      "   ",
    ],
    {
      A: "minecraft:iron_ingot",
      C: "shadow-wizards:chain_helmet",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:tier_2_chestplate", 1), // arg 1: output
    [
      "A A",
      "ACA", // arg 2: the shape (array of strings)
      "AAA",
    ],
    {
      A: "minecraft:iron_ingot",
      C: "shadow-wizards:chain_chestplate",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:tier_2_leggings", 1), // arg 1: output
    [
      "ACA",
      "A A", // arg 2: the shape (array of strings)
      "A A",
    ],
    {
      A: "minecraft:iron_ingot",
      C: "shadow-wizards:chain_leggings",
    },
  );
  event.shaped(
    Item.of("shadow-wizards:tier_2_boots", 1), // arg 1: output
    [
      "ACA",
      "A A", // arg 2: the shape (array of strings)
      "   ",
    ],
    {
      A: "minecraft:iron_ingot",
      C: "shadow-wizards:chain_boots",
    },
  );

  event.shaped(
    Item.of("shadow-wizards:iron_rapier", 1), // arg 1: output
    [
      "  A",
      "CA ", // arg 2: the shape (array of strings)
      "BC ",
    ],
    {
      A: "minecraft:iron_ingot",
      B: "minecraft:stick",
      C: "minecraft:chain",
    },
  );

  event.shapeless("4x shadow-wizards:fire_grease", [
    // arg 1: output
    "minecraft:bone_meal",
    "minecraft:coal",
    "4x shadow-wizards:resin",
  ]);
  event.shapeless("shadow-wizards:fire_grease", [
    // arg 1: output
    "2x minecraft:coal",
    "2x shadow-wizards:resin",
  ]);

  let minerals = ["ruby", "topaz", "citrine", "jade", "sapphire", "tanzanite"];
  minerals.forEach((element) => {
    event.replaceInput(
      { input: "minecraft:netherite_ingot" }, // Arg 1: the filter
      "minecraft:netherite_ingot", // Arg 2: the item to replace
      "aylyth:esstline", // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    );
  });
  event.remove({ output: "immersive_armors:wooden_helmet" });
  event.remove({ output: "immersive_armors:wooden_chestplate" });
  event.remove({ output: "immersive_armors:wooden_leggings" });
  event.remove({ output: "immersive_armors:wooden_boots" });
});

BlockEvents.rightClicked((event) => {
  if (
    event.block.id === "rootsclassic:mortar" &&
    event.player.mainHandItem == "rootsclassic:pestle"
  ) {
    if (
      event.player.offHandItem == "minecraft:oak_sapling" ||
      event.player.offHandItem == "minecraft:dark_oak_sapling"
    ) {
      event.player.offHandItem.count--;
      event.player.give("shadow-wizards:resin");
      event.cancel();
    }
  }
});
