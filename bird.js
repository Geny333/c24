class bird 
{
    constructor(x,y)
    {
        var option = 
        {
            restitution:0.5,
            friction:1.0,
            density:1.5
        }
        this.body= Bodies.rectangle(x,y,50,50,option)
        this.width =50
        this.height =50
        World.add(world,this.body)
    }
    Display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        pos.x=mouseX
        pos.y=mouseY
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        rectMode (CENTER)
        strokeWeight (3)
        stroke ("blue")
        fill ("green")
        rect (0,0,this.width,this.height)
        pop ()
    }
}