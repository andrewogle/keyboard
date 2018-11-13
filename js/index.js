class Keyboard{
    constructor(keyboard){
        this.keyboard = keyboard;
        this.key = this.keyboard.querySelectorAll('.keys');
        this.character = this.keyboard.querySelectorAll('.character');
        this.letter = this.keyboard.querySelectorAll('.letter');
        this.altChar = this.keyboard.querySelectorAll('.altChar');
        this.caps = this.keyboard.querySelector('.caps');

        this.caps.addEventListener('click',()=>this.capsLock());

    }
    //capsLock functionality
    capsLock(){
        this.letter.forEach(letter =>{
            //move this to the css with a new class and use toggle instead
            letter.style.backgroundColor = 'blue';
            letter.style.textTransform = 'uppercase';
            
        });
    }
}

let keyboard = document.querySelectorAll('.keyboard');
keyboard = Array.from(keyboard);
keyboard.map(keyboard=>{
    return new Keyboard(keyboard);
})