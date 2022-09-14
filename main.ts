basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showIcon(IconNames.No)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.showIcon(IconNames.Confused)
        basic.pause(500)
        basic.showIcon(IconNames.Angry)
        basic.pause(500)
    }
})
