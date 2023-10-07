const clientInfo = {}

window.Twitch.ext.onAuthorized(
    function (auth) {
  console.log(auth.userId)
  clientInfo.userId = auth.userId
})

export default clientInfo
