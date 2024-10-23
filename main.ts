controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.createProjectileFromSprite(assets.image`bullet`, mySprite, 0, 0)
    mySprite2.setVelocity(0, -100)
    mySprite2 = sprites.create(assets.image`no bullet`, SpriteKind.Projectile)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    controller.moveSprite(mySprite2)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    controller.moveSprite(mySprite2)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(0)
mySprite = sprites.create(assets.image`rocket`, SpriteKind.Player)
mySprite.setPosition(80, 109)
