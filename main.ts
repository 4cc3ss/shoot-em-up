controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.createProjectileFromSprite(assets.image`bullet`, mySprite, 0, 0)
    mySprite2.setVelocity(0, -100)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(0)
mySprite = sprites.create(assets.image`rocket`, SpriteKind.Player)
mySprite.setPosition(80, 109)
let myEnemy = sprites.create(assets.image`alien`, SpriteKind.Enemy)
mySprite.setPosition(108, 109)
myEnemy.follow(mySprite, 2)
game.onUpdateInterval(2000, function () {
    myEnemy = sprites.create(assets.image`alien`, SpriteKind.Player)
    myEnemy.setPosition(20, 21)
})
