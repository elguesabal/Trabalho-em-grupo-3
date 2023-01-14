function meteNoneBlock(akiEntraIdDiv) {
    for (let i = 1; i < 6; i++) {
        document.getElementById(`n${i}`).style.display = 'none'
    }
    document.getElementById(akiEntraIdDiv).style.display = 'block'
}

export default meteNoneBlock