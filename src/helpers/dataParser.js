import store from "../redux/store";
import {addKey, forMap} from './general';

const ticketStatusInfo = {
  0: 'pending',
  1: 'returned',
  2: 'won',
  3: 'lost'
};

function dataParser(data) {
  const {
    currency,
    userId,
    userBalance,
    ballFrequency,
    drawInfo,
    lastRaces,
    maximalBet,
    minimalBet,
    maxWin,
    secondsTillDraw,
    stakeDenomination,
    userStakes,
    usersCurrentDrawStakes
  } = data;

  const parsedData = {};

  if (!!ballFrequency) {
    parsedData.ballFrequency = {
      coldBalls: ballFrequency.coldBalls.reduce((acc, el) => {
        acc[el[0]] = el[1];
        return acc;
      }, {}), hotBalls: ballFrequency.hotBalls.reduce((acc, el) => {
        acc[el[0]] = el[1];
        return acc;
      }, {})
    };
  }

  if (!!lastRaces) {
    parsedData.drawHistoryTickets = lastRaces.map((ticket) => ({
      id: ticket.id,
      dt: ticket.dt,
      digits: ticket.r.split(',')
    }));
  }

  if (!!userStakes) {
    parsedData.userHistoryTickets = userStakes.reduce((acc, ticket) => {
      const {id} = ticket;
      const drawId = ticket.draw;
      const digits = forMap(10, (i) => ticket['b' + (i + 1)]).filter((digit) => digit !== 0);
      const betMoney = ticket.package_sum;
      const date = ticket.dt;
      const winCombination = !!ticket.wonCombnation ? ticket.wonCombnation.split(',').reduce((acc, el) => addKey(acc, el), {}) : {};
      const wonMoney = ticket.wsum;
      const ticketStatus = ticketStatusInfo[ticket.ststatus];
      const currency = ticket.currency;

      const newTicket = {digits, id, drawId, betMoney, date, winCombination, wonMoney, ticketStatus, currency};
      (acc[drawId] = acc[drawId] || []).push(newTicket);
      return acc;
    }, {});
  }

  if (!!usersCurrentDrawStakes) {
    parsedData.userCurrentTickets = usersCurrentDrawStakes.reduce((acc, ticket) => {
      const newTicket = {
        digits: forMap(10, (i) => ticket['b' + (i + 1)]).filter((digit) => digit !== 0),
        date: ticket.dt,
        id: ticket.id,
        betMoney: ticket.package_sum,
        winCombination: ticket.wonCombnation,
        ticketStatus: ticketStatusInfo[ticket.ststatus],
        wonMoney: ticket.wsum,
      };
      acc.push(newTicket);
      return acc;
    }, []);
  }

  if (!!maximalBet && !!minimalBet && !!stakeDenomination && !!maxWin) {
    parsedData.betAmountOption = {
      maxBet: Number(maximalBet),
      minBet: Number(minimalBet),
      betStep: Number(stakeDenomination),
      maxWin: Number(maxWin)
    };
  }

  if (!!secondsTillDraw) {
    parsedData.secTillDraw = secondsTillDraw;
  }

  if (!!drawInfo) {
    parsedData.drawInfo = drawInfo;
  }

  if (!!userId) {
    parsedData.userData = {
      userId: userId,
      userBalance: Number(userBalance)
    };
  }

  if (!!currency) {
    parsedData.currency = currency;
  }

  return parsedData;
}


export default dataParser;
