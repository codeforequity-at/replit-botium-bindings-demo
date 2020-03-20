const { BotDriver } = require('botium-core')

const turn = async (container, text) => {
  await container.UserSaysText(text)
  console.log("SENT: " + text)
  const answer = await container.WaitBotSaysText()
  console.log("ANSWER: " + answer)
  return answer
}

(async () => {
  try {
    const driver = new BotDriver()
    const container = await driver.Build()
    await container.Start()

    let answer = await turn(container, "order number 1")
    if (answer.startsWith("here are the details for order")) {
      await turn(container, "thank you")
    } else {
      await turn(container, "thanks for nothing")
    }
  } catch (err) {
    console.log('FAILED ', err)
  }
})()