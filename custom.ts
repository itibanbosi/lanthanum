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



//% color="#a0522d" weight=36 block="人が動いたら" group="2 iːo人感センサー"
export function humanDetection() : boolean {
    pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
    if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        return true;
    } else {
        return false;
    }
}

//% color="#a0522d" weight=34 blockId=IO_human block="人感ｾﾝｻ値" group="2 iːo人感センサー"
export function IO_human(): number {
    pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
    return pins.digitalReadPin(DigitalPin.P14);
}

//% color="#a0522d"  weight=79 blockId=IO_human_DISP block="人感ｾﾝｻの値を表示する" group="2 iːo人感センサー"
export function IO_human_DISP() {

    pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
    basic.showNumber(pins.digitalReadPin(DigitalPin.P14));
}

//% color="#009A00"  weight=81 blockId=microbit2_decideLight block="m:bit光ｾﾝｻ値 |%limit| より暗い" group="3 microbitの光ｾﾝｻ"
//% limit.min=0 limit.max=100
export function microbit2_decideLight(limit: number): boolean {
    if (input.lightLevel() / 254 * 100 < limit) {
        return true;
    } else {
        return false;
    }
}



//% color="#009A00"  weight=80 blockId=microbit2_denkitemp block="m:bit光ｾﾝｻ値" group="3 microbitの光ｾﾝｻ"
export function microbit2_denkitemp(): number {

    return Math.round(input.lightLevel() / 254 * 100);

}


//% color="#228b22"  weight=82 blockId=microbit2_denkiLED block="m:bit光ｾﾝｻの値を表示する" group="3 microbitの光ｾﾝｻ"
export function microbit2_denkiLED() {
    basic.showNumber(Math.round(input.lightLevel() / 254 * 100));
}




    //% color="#009A00"  weight=81 blockId=tempurature_condition block="温度が |%limit| より高ければ" group="3 microbitの光ｾﾝｻ"
    //% limit.min=0 limit.max=100
    export function tempurature_condition(limit: number): boolean {
        if (input.lightLevel() / 254 * 100 < limit) {
            return true;
        } else {
            return false;
        }
    }

    //% color="#a0522d" weight=34 blockId=Temperature block="温度" group="2 iːo人感センサー"
    export function Temperature(): number {

        return BMP280.temperature();
    }

    //% color="#a0522d"  weight=79 blockId=temperature_DISP block="人感ｾﾝｻの値を表示する" group="2 iːo人感センサー"
    export function temperature_DISP() {

        basic.showNumber(BMP280.temperature())
    }










}
