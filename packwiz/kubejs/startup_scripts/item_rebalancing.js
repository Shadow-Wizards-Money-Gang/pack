// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ItemEvents.modification(event => {
    event.modify([
        "immersive_armor:heavy_leggings",
        "immersive_armor:heavy_chestplate"
      ], item => {
        let boost = 3
        let attribute = item.getAttributes("generic.armor").get(0)
        item.removeAttribute("generic.armor", attribute.id)
        item.addAttribute("generic.armor", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
    });

    event.modify([
        'minecraft:chainmail_chestplate',
        'minecraft:chainmail_leggings'
      ], item => {
        let boost = 1.5
        let attribute = item.getAttributes("generic.armor").get(0)
        item.removeAttribute("generic.armor", attribute.id)
        item.addAttribute("generic.armor", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
    });
    
    event.modify([
        'aylyth:nephrite_sword',
        'aylyth:vampiric_sword',
        'aylyth:blighted_sword',
        
      ], item => {
        let boost = -1.5
        let attribute = item.getAttributes("generic.attack_damage").get(0)
        item.removeAttribute("generic.attack_damage", attribute.id)
        item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)   
    });

    event.modify([
        'aylyth:nephrite_axe',
        'aylyth:vampiric_axe',
        'aylyth:blighted_axe',
        
      ], item => {
        let boost = -0.5
        let attribute = item.getAttributes("generic.attack_damage").get(0)
        item.removeAttribute("generic.attack_damage", attribute.id)
        item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount + boost, attribute.operation)   
    });


    event.modify([
        'rootsclassic:engraved_blade'
      ], item => {
        item.rarity = "UNCOMMON"
        let attribute = item.getAttributes("generic.attack_damage").get(0)
        item.removeAttribute("generic.attack_damage", attribute.id)
        item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount - 5, attribute.operation)   
    });

    
    event.modify([
        'aylyth:ympe_scythe'
      ], item => {
        let attribute = item.getAttributes("generic.attack_damage").get(0)
        item.removeAttribute("generic.attack_damage", attribute.id)
        item.addAttribute("generic.attack_damage", attribute.id, attribute.name, attribute.amount - 1.5, attribute.operation)   
        let attribuate2 = item.getAttributes("generic.attack_speed").get(0)
        item.removeAttribute("generic.attack_speed", attribuate2.id)
        item.addAttribute("generic.attack_speed", attribuate2.id, attribuate2.name, attribuate2.amount + 1, attribuate2.operation)   
    });

    event.modify([
        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots',
        "mincraft:iron_sword",
        "mincraft:iron_axe"
      ], item => {
        item.addAttribute("spell_power:fire", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.2, "multiply_total")
        item.addAttribute("spell_power:arcane", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.2, "multiply_total")   
        item.addAttribute("spell_power:frost", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.2, "multiply_total")   
        item.addAttribute("spell_power:healing", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.2, "multiply_total")   
        item.addAttribute("spell_power:soul", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.2, "multiply_total")   
        item.addAttribute("arcanuscontinuum:mana_regen", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.2, "multiply_total")   
    });

    event.modify([
      'minecraft:chainmail_helmet',
      'minecraft:chainmail_chestplate',
      'minecraft:chainmail_leggings',
      'minecraft:chainmail_boots'
    ], item => {
      item.addAttribute("spell_power:fire", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.1, "multiply_total")
      item.addAttribute("spell_power:arcane", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.1, "multiply_total")   
      item.addAttribute("spell_power:frost", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.1, "multiply_total")   
      item.addAttribute("spell_power:healing", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.1, "multiply_total")   
      item.addAttribute("spell_power:soul", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.1, "multiply_total")   
      item.addAttribute("arcanuscontinuum:mana_regen", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.1, "multiply_total")   
  });

    event.modify([
        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots'
      ], item => {
        item.addAttribute("minecraft:generic.movement_speed", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", - 0.07, "multiply_total")   
        item.addAttribute("minecraft:generic.knockback_resistance", "1989c4f4-7685-48b3-a3af-b3c66218d93b", "Iron Penality", 0.1, "addition")   
    });
})