/**
* 使用這個文件來定義自訂的函式和積木。
* 進一步了解：https://makecode.microbit.org/blocks/custom
*/
enum AlarmSound {
    //% block="annoy"
    Annoy,
    //% block="alert"
    Alert
}


enum MyEnum {
    //% block="開" //使用者看到的值
    open, //程式設定的值
    //% block="關"
    close
}

/**
 * Custom blocks  
 * //% weight=170表示積木的高底位置0~170之間 
 *color 顏色
 * icon="\uf13d"符號  
 * 加入block=開發版  取名開發版 也可以是英文
 */
//% weight=10 color=#0066ff icon="\uf13d" block=開發粄
namespace custom {
    /**
     * TODO: describe your function here
     * @param n 他是整數 describe parameter here, eg: 5
     * @param s 他是字串 describe parameter here, eg: "Hello"
     * @param e 他是列舉 describe parameter here
     */
    //% block="設定led燈  x %x y %y" 
    export function foo(e: MyEnum, x: number, y: number): void {
        if (e == MyEnum.open) { // 如果選擇開,將led(x,y) 打開
            led.plot(x, y)
        }
        else if (e == MyEnum.close) { // 如果選擇關,將led(x,y) 關閉
            led.unplot(x, y)
        }
    }
    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="算出長方形面積 長 %x 寬 %y"
    //% x.min=1 x.max=180 x.def1=2
    //% y.min=1 y.max=180 y.def1=2
    export function area(x: number, y: number): number {
        return x * y;
    }
    //% block="播放警告聲音 || of %sound for %duration ms"
    //% duration.shadow=timePicker //設定延遲參數是時間選擇
    //% expandableArgumentMode=toggle //toggle按一下全部展開,true 一次展開一個
    export function alarmSound(sound?: AlarmSound, duration: number = 160) {
        if (sound == AlarmSound.Annoy)
            music.playTone(400, duration);
        else {
            music.playTone(261, duration);
            music.playTone(298, duration);
            music.playTone(331, duration);
        }
    }




}