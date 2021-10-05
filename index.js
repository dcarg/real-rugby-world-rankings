const axios = require('axios')
const cheerio = require('cheerio')
const cheerioTableparser = require('cheerio-tableparser');
const express = require('express')

async function getWorldRankings() {
  try {
    const siteUrl = 'https://www.world.rugby/tournaments/rankings/mru'

    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    })

    const $ = cheerio.load(data)
    const elemSelector = 'body > section > div.pageContent.flex-content > div:nth-child(2) > div.column.large-8 > div > section > section > div.fullRankingsContainer.large-7.columns > div > div > table > tbody > tr'

    $(elemSelector).each((parentIndex, parentElem) => {
      $(parentElem).children().each((childIndex, childElem) => {
        console.log($(childElem).text());
      })
    })

  } catch (err) {
    console.error(err);
  }
}

getWorldRankings()