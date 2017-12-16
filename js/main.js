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
  const url = form.getAttribute('action')

  const name = form.querySelector('input[name="mail-nom"]').value
  const addr = form.querySelector('input[name="mail-addr"]').value
  const obj = form.querySelector('input[name="mail-objet"]').value
  const msg = form.querySelector('textarea[name="mail-message"]').value

  console.table({ url, name, addr, obj, msg })
}
