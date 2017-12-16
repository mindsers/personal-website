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

}
