kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
});

const MOVE_SPEED = 120

// Error with import images

// loadRoot("./assets/sprites/");
// loadSprite("link-left", "/link-left.png");
// loadSprite("link-right", "/link-right.png");
// loadSprite("link-down", "/link-down.png");
// loadSprite("link-up", "/link-up.png");
// loadSprite("left-wall", "/leftwall.png");
// loadSprite("top-wall", "/top-wall.png");
// loadSprite("bottom-wall", "/bottom-wall.png");
// loadSprite("right-wall", "/right-wall.png");
// loadSprite("bottom-left-wall", "/bottom-left-wall.png");
// loadSprite("bottom-right-wall", "/bottom-right-wall.png");
// loadSprite("top-left-wall", "/top-left-wall.png");
// loadSprite("top-right-wall", "/top-rigth-wall.jpg");
// loadSprite("top-door", "/top-door.png");
// loadSprite("fire-pot", "/fire-pot.png");
// loadSprite("left-door", "/left-door.png");
// loadSprite("lanterns", "/lanterns.png");
// loadSprite("slicer", "/slicer.png");
// loadSprite("skeletor", "/skeletor.png");
// loadSprite("kaboom", "/kaboom.png");
// loadSprite("stairs", "/stairs.png");
// loadSprite("bg", "/bg.png");

loadRoot('https://i.imgur.com/')
loadSprite('link-left', '1Xq9biB.png')
loadSprite('link-right', 'yZIb8O2.png')
loadSprite('link-down', 'tVtlP6y.png')
loadSprite('link-up', 'UkV0we0.png')
loadSprite('left-wall', 'rfDoaa1.png')
loadSprite('top-wall', 'QA257Bj.png')
loadSprite('bottom-wall', 'vWJWmvb.png')
loadSprite('right-wall', 'SmHhgUn.png')
loadSprite('bottom-left-wall', 'awnTfNC.png')
loadSprite('bottom-right-wall', '84oyTFy.png')
loadSprite('top-left-wall', 'xlpUxIm.png')
loadSprite('top-right-wall', 'z0OmBd1.jpg')
loadSprite('top-door', 'U9nre4n.png')
loadSprite('fire-pot', 'I7xSp7w.png')
loadSprite('left-door', 'okdJNls.png')
loadSprite('lanterns', 'wiSiY09.png')
loadSprite('slicer', 'c6JFi5Z.png')
loadSprite('skeletor', 'Ei1VnX8.png')
loadSprite('kaboom', 'o9WizfI.png')
loadSprite('stairs', 'VghkL08.png')
loadSprite('bg', 'u4DVsx6.png')

scene("game", ({level,score}) => {
    layers(['bg','obj','ui'], 'obj')

    const map = [
        'ycc)cc^ccw',
        'a        b',
        'a      * b',
        'a    (   b',
        '%        b',
        'a    (   b',
        'a   *    b',
        'a        b',
        'xdd)dd)ddz',
    ]

    const levelCfg = {
        width:48,
        height:48,
        "a": [sprite("left-wall"),solid()],
        "b": [sprite("right-wall"),solid()],
        "c": [sprite("top-wall"),solid()],
        "d": [sprite("bottom-wall"),solid()],
        "w": [sprite("top-right-wall"),solid()],
        "x": [sprite("bottom-left-wall"),solid()],
        "y": [sprite("top-left-wall"),solid()],
        "z": [sprite("bottom-right-wall"),solid()],
        "%": [sprite("left-door"),solid()],
        "^": [sprite("top-door")],
        "$": [sprite("stairs")],
        "*": [sprite("slicer")],
        "}": [sprite("skeletor")],
        ")": [sprite("lanterns"),solid()],
        "(": [sprite("fire-pot"),solid()],
    }
    addLevel(map,levelCfg)

    add(sprite[('bg'), layer('bg')])

    add([
        text('0'),
        pos(400,450),
        layer('ui'),
        {
            value: score,
        },
        scale(2)
    ])
    add([text('level' + parseInt(level + 1)), pos(400,485), scale(2)])

    const player = add([
        sprite('link-right'),
        pos(5,190),
        {
            //rigth by default
            dir:vec2(1,0)
        }
    ])

    player.action(() => {
        player.resolve()
    })

    keyDown('left', () => {
        player.changeSprite('link-left')
        player.move(-MOVE_SPEED,0)
        player.dir = vec2(-1,0)
    })

    keyDown('right', () => {
        player.changeSprite('link-right')
        player.move(MOVE_SPEED,0)
        player.dir = vec2(1,0)
    })

    keyDown('up', () => {
        player.changeSprite('link-up')
        player.move(0,-MOVE_SPEED)
        player.dir = vec2(0,-1)
    })

    keyDown('down', () => {
        player.changeSprite('link-down')
        player.move(0,MOVE_SPEED)
        player.dir = vec2(0,1)
    })

});

  

start("game", {level:0, score:0});
