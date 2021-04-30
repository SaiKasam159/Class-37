class Form{
    constructor(){
    
        this.input = createInput('')
        this.button = createButton('play')
        this.greeting = createElement('h3')
    }
    display(){

        var title = createElement('h2')
        title.html('MULTIPLAYER RACE GAME GO BRRRRRRRRRRRRRRRRRR')
        title.position(130,0)
        this.input.position(130, 160)
        this.button.position(250, 200)

        this.button.mousePressed(()=>{
            
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()   
            playerCount += 1  
            player.updateCount(playerCount)  
            this.greeting.html('AYO PLAY THE DARN GAME YOU FRICKING WASTEMAN')
            this.greeting.position(130, 160)    
        })
        
    }

}
