enum onoff {
    ON,
    OFF,
}

enum LED_color {
    Red,
    orange,
    yellow,
    green,
    water,
    Blue,
    purple,
    white,
}

//% color="#ff7b00" block="Eurekaランタン"
namespace natumi_blocks {

    //% color="#858585" weight=54 blockId=eureka_fullcolor block="ＬＥＤ |%color|色 スイッチ|%mode|" group="2_にじ色ＬＥＤ"
    export function eureka_fullcolor(color: LED_color, mode: onoff) {
        switch (color) {
            case LED_color.Red:
                pins.digitalWritePin(DigitalPin.P0, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.orange:
                pins.digitalWritePin(DigitalPin.P0, 1);
                pins.analogWritePin(AnalogPin.P13, 240)
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.yellow:
                pins.digitalWritePin(DigitalPin.P0, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.green:
                pins.digitalWritePin(DigitalPin.P13, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.water:
                pins.analogWritePin(AnalogPin.P0, 388)
                pins.digitalWritePin(DigitalPin.P13, 1);
                pins.analogWritePin(AnalogPin.P14, 767)
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.Blue:
                pins.digitalWritePin(DigitalPin.P14, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.purple:
                pins.analogWritePin(AnalogPin.P0, 338)
                pins.digitalWritePin(DigitalPin.P14, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
            case LED_color.white:
                pins.digitalWritePin(DigitalPin.P0, 1);
                pins.digitalWritePin(DigitalPin.P13, 1);
                pins.digitalWritePin(DigitalPin.P14, 1);
                basic.pause(mode);
                if (mode == 0) {
                    return
                } else {
                    pins.digitalWritePin(DigitalPin.P0, 0);
                    pins.digitalWritePin(DigitalPin.P13, 0);
                    pins.digitalWritePin(DigitalPin.P14, 0);
                    basic.pause(mode);
                    return
                }
        }
    }

    //% color="#1E90FF" weight=10 block="待ち時間（秒）|%second|" group="機能"
    //% second.min=0 second.max=10
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }
}
