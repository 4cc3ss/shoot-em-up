controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(assets.image`bullet`, SpriteKind.Projectile)
    mySprite2.setPosition(79, 105)
    mySprite2.setVelocity(0, -100)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.player1.moveSprite(mySprite)
    controller.moveSprite(mySprite2)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.player1.moveSprite(mySprite)
    controller.moveSprite(mySprite2)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(0)
mySprite = sprites.create(assets.image`rocket`, SpriteKind.Player)
mySprite.setPosition(80, 109)
