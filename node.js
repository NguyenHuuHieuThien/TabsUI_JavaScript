const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const tabsPain = $$('.tab-pane')
const tabActive = $('.tab-item.active')
const line = $('.line')

line.style.left = tabActive.offsetLeft
line.style.width = tabActive.offsetWidth
tabs.forEach((tab, index) => {
    const pain = tabsPain[index]
    tab.onclick = function () {
        
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        
        line.style.left = this.offsetLeft
        line.style.width = this.offsetWidth

        this.classList.add('active')
        pain.classList.add('active')
    }
 })