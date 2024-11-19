function swapText(){
    const restore0 = p0.textContent
    p0.textContent = p1.textContent
    p1.textContent = p2.textContent
    p2.textContent = restore0
}