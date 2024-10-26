PlayerEvents.respawned(event => {
    var player = event.getPlayer()
    player.potionEffects.add('minecraft:luck', 6000, 0, false, false)
  })