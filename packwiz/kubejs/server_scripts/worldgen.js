ServerEvents.tags("worldgen/biomes", event => {
    event.get("minecraft:has_structure/ruined_portal_desert").removeAll()
    event.get("minecraft:has_structure/ruined_portal_jungle").removeAll()
    event.get("minecraft:has_structure/ruined_portal_mountain").removeAll()
    event.get("minecraft:has_structure/ruined_portal_nether").removeAll()
    event.get("minecraft:has_structure/ruined_portal_ocean").removeAll()
    event.get("minecraft:has_structure/ruined_portal_standard").removeAll()
    event.get("minecraft:has_structure/ruined_portal_swamp").removeAll()
})