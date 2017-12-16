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
}

function handleContactFormSubmit(e) {
  e.preventDefault()

  const form = e.target
  const formData = new FormData(form)
  const url = form.getAttribute('action')

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(data => JSON.parse(data))
  .then(({ status }) => {
    if (status === 1) {
      throw new Error('Server error')
    }

    form.parentNode.innerHTML = '<p class="rep-success">Your email is sent.</p>'
  })
  .catch(_ => {
    form.parentNode.innerHTML = '<p class="rep-error">Error</p>'
  })
}
