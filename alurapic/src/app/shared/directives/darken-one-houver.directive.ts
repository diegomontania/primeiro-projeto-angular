import { Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
    // seletor entre colchetes pois dessa forma é definido como se a diretiva
    // fosse um atributo de um componente
    selector: '[apDarkenOnHouver]'
})

export class DarkOnHoverDirective{

    // el: referencia ao elemento do dom
    // Rendere2: responsável por fazer o efeito no render
    constructor(private el: ElementRef, private render : Renderer2) {}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
        // console.log("ON");
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}