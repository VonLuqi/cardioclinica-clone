const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches
const isTouch = window.matchMedia('(pointer: coarse)').matches
const shouldRun = !isReducedMotion && !isTouch

if (shouldRun)
{
    let mouseX = sessionStorage.getItem('mouseX') || 0
    let mouseY = sessionStorage.getItem('mouseY') || 0

    const pointer = document.querySelector('.pointer')

    pointer.style.setProperty('--mouseX', `${mouseX}px`)
    pointer.style.setProperty('--mouseY', `${mouseY}px`)

    setTimeout(() => {
        pointer.style.opacity = 1
    }, 300)

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY

        sessionStorage.setItem('mouseX', mouseX)
        sessionStorage.setItem('mouseY', mouseY)
    })
    
    function animate()
    {
        pointer.style.setProperty('--mouseX', `${mouseX}px`)
        pointer.style.setProperty('--mouseY', `${mouseY}px`)
        requestAnimationFrame(animate)
    }

    animate()
}
