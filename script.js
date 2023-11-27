document.ready(function (){
               
    let open_btn = document.getElementByClassName("menu_btn");
    let close_btn = document.getElementByClassName("close_btn");
    
    let panels = document.getElementByClassName("panel");
    let links = document.getElementByClassName("litem");
    let lines = document.getElementByClassName("line");
    let data_content = document.getElementByClassName("data__content");
    let data_sub = document.getElementByClassName("data__sub");
    let footer = document.getElementByClassName("footer");
    
    let tl = new TimelineLite({paused:true});
    
    tl.to(panels, 0.5, {width: '50%'})
            .to(open_btn, 0.5, {opacity: 0, visibility: 'hidden', 'z-index':0}, "-=0.5")
            .to(data_content, 0.5, {y:0, opacity: 1})
            .to(data_sub, 0.5, {y:0, opacity: 1}, "-=0.25")
            .staggerTo(links, 0.3, {y:0}, 0.05, "-=0.75")
            .to(lines, 0.5, {opacity: 1})
            .to(footer, 0.5, {opacity: 1}, "-=0.5");
    
    
    
    
    
    open_btn.addEventListener('click', (e) => {
        e.preventDefault();
        tl.play();
    });
    
    close_btn.addEventListener('click', (e) => {
        e.preventDefault();
        tl.reverse();
    });

 });