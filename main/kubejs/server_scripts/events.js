PlayerEvents.respawned(event => {
    var player = event.getPlayer()
    player.potionEffects.add('minecraft:luck', 18000, 0, false, false)
  })