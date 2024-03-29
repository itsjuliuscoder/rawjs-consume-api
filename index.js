const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'book.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(article => {
      const card = document.createElement('div')
      card.setAttribute('class', 'col3')

      const h1 = document.createElement('h1')
      h1.textContent = article.title

      const p = document.createElement('a')
      article.url = article.url
      p.textContent = `${article.url}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()