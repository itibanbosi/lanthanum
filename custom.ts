enum onoff {
    ON,
    OFF,
}

enum LED_color {
    Red,
    yellow,
    green,
    water,
    Blue,
    purple,
    white,
}

//% color="#ff7b00" block="Eurekaランタン"
namespace natumi_blocks {

    //% color="#1E90FF" weight=10 block="待ち時間（秒）|%second|" group="機能"
    //% second.min=0 second.max=10
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }

    //% color="#858585" weight=54 blockId=eureka_fullcolor block="ＬＥＤ |%color|色 " group="2_にじ色ＬＥＤ"
    export function eureka_fullcolor(color: LED_color) {
        pins.analogSetPeriod(AnalogPin.P1, 2000)
        pins.analogSetPeriod(AnalogPin.P15, 2000)
        pins.analogSetPeriod(AnalogPin.P16, 2000)
        switch (color) {
            case LED_color.Red:
                pins.digitalWritePin(DigitalPin.P1, 0);
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P16, 1);
                return

            case LED_color.yellow:
                pins.digitalWritePin(DigitalPin.P1, 1);
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P16, 1);
                return

            case LED_color.green:
                pins.digitalWritePin(DigitalPin.P1, 1);
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P16, 0);
                return

            case LED_color.water:
                pins.digitalWritePin(DigitalPin.P1, 1);
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P16, 0);
                return

            case LED_color.Blue:
                pins.digitalWritePin(DigitalPin.P1, 0);
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P16, 0);
                return

            case LED_color.purple:
                pins.digitalWritePin(DigitalPin.P1, 0);
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P16, 1);
                return

            case LED_color.white:
                pins.digitalWritePin(DigitalPin.P1, 1);
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P16, 1);
                return
        }
    }


    //% color="#858585" weight=54 blockId=fullcolor_power block="ＬＥＤ|%color|色 明るさ|%power|" group="2_にじ色ＬＥＤ"
    export function fullcolor_power(color: LED_color, power: number) {

        switch (color) {
            case LED_color.Red:
                pins.analogWritePin(AnalogPin.P1, 0)
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P16, power)
                return

            case LED_color.yellow:
                pins.analogWritePin(AnalogPin.P1, power)
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P16, power)
                return

            case LED_color.green:
                pins.analogWritePin(AnalogPin.P1, power)
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P16, 0)
                return

            case LED_color.water:
                pins.analogWritePin(AnalogPin.P1, power)
                pins.analogWritePin(AnalogPin.P15, power)
                pins.analogWritePin(AnalogPin.P16, 0)
                return

            case LED_color.Blue:
                pins.analogWritePin(AnalogPin.P1, 0)
                pins.analogWritePin(AnalogPin.P15, power)
                pins.analogWritePin(AnalogPin.P16, 0)
                return

            case LED_color.purple:
                pins.analogWritePin(AnalogPin.P1, 0)
                pins.analogWritePin(AnalogPin.P15, power)
                pins.analogWritePin(AnalogPin.P16, power)
                return

            case LED_color.white:
                pins.analogWritePin(AnalogPin.P1, power)
                pins.analogWritePin(AnalogPin.P15, power)
                pins.analogWritePin(AnalogPin.P16, power)
                return
        }
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
        if (BMP280.temperature()  < limit) {
            return true;
        } else {
            return false;
        }
    }

    //% color="#a0522d" weight=34 blockId=Temperature block="温度" group="2 iːo人感センサー"
    export function Temperature(): number {

        return BMP280.temperature();
    }

    //% color="#a0522d"  weight=79 blockId=temperature_DISP block="温度を表示する" group="2 iːo人感センサー"
    export function temperature_DISP() {

        basic.showNumber(BMP280.temperature())
    }



    //% color="#009A00"  weight=81 blockId=press_condition block="気圧(hp)が |%limit| より高ければ" group="3 microbitの光ｾﾝｻ"
    //% limit.min=0 limit.max=100
    export function press_condition(limit: number): boolean {
        if (BMP280.pressure()  < limit) {
            return true;
        } else {
            return false;
        }
    }

    //% color="#a0522d" weight=34 blockId=press block="気圧(hp)" group="2 iːo人感センサー"
    export function press(): number {

        return BMP280.pressure();
    }

    //% color="#a0522d"  weight=79 blockId=press_DISP block="気圧(hp)を表示する" group="2 iːo人感センサー"
    export function press_DISP() {

        basic.showNumber(BMP280.pressure());
    }






}
