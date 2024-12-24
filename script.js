document.querySelectorAll('.elementsMenu a, .footer a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const targetId = this.getAttribute('href').replace('#', '')

        if (targetId) {
            const targetElement = document.getElementById(targetId)

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        } else {
            // Rolar suavemente para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    })
})