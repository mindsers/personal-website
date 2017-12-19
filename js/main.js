(function () {
  if (document.readyState !== 'complete') {
    const handler = () => {
      application()
      document.removeEventListener('DOMContentLoaded', handler)
    }

    document.addEventListener('DOMContentLoaded', handler)
    return
  }

  application()
})()

function application() {
  document
    .querySelector('#contact-form')
    .addEventListener('submit', handleContactFormSubmit)

  getLastTweet()
    .then(tweet => {
      const container = document.querySelector('.tweet')

      container.querySelector('.text').innerHTML = tweet.text
      container.querySelector('.name').innerHTML = tweet.name
      container.querySelector('.date').innerHTML = tweet.date
      container.querySelector('.screen_name').innerHTML = `@${tweet.screenName}`
    })
}

function handleContactFormSubmit(e) {
  e.preventDefault()

  const form = e.target
  const container = form.parentNode
  const url = form.getAttribute('action')

  fetch(url, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(data => JSON.parse(data))
  .then(({ status }) => {
    if (status === 1) {
      throw new Error('Server error')
    }

    container.innerHTML = '<p class="rep-success">Your email is sent.</p>'
  })
  .catch(_ => {
    container.innerHTML = '<p class="rep-error">Error</p>'
  })
}

function getLastTweet() {
  return fetch('../core/tweet.php')
    .then(data => { console.log(data); return data })
    .then(data => JSON.parse(data))
    .then(tweets => tweets.map(tweet => {
      const mappings = []

      if (tweet.entities.hashtags.length > 0) {
        for (const hash of tweet.entities.hashtags) {
          const [from = 0, to = 0] = hash.indices
          const link = `<a class="hashtag" href="http://twitter.com/hashtag/${hash.text}?src=hash">${tweet.text.substring(from, to)}</a>`

          mappings.push({ from: tweet.text.substring(from, to), to: link })
        }
      }

      if (tweet.entities.urls.length > 0) {
        for (const url of tweet.entities.urls) {
          const [from = 0, to = 0] = url.indices
          const link = `<a href="${url.expanded_url}">${url.display_url}</a>`

          mappings.push({ from: tweet.text.substring(from, to), to: link })
        }
      }

      if (tweet.entities.user_mentions.length > 0) {
        for (const mention of tweet.entities.user_mentions) {
          const [from = 0, to = 0] = mention.indices
          const link = `<a class="user_mentions" href="http://twitter.com/${mention.screen_name}">${tweet.text.substring(from, to)}</a>`

          mappings.push({ from: tweet.text.substring(from, to), to: link })
        }
      }

      const text = mappings.reduce((tweet, { from, to }) => {
        return tweet.replace(from, to)
      }, tweet.text)

      return {
        text,
        name: tweet.user.name,
        screenName: tweet.user.screen_name,
        date: (new Date(tweet.created_at)).toDateString()
      }
    }))
    .then(tweets => tweets.shift())
}
