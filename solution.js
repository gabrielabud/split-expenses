// transforms a transaction object details into a matrix like format of array that could be more easily manipulated
function createTransactionSummary({ title, spend, total, payer }) {
  let transactionSummary = {};
  for(let user in spend) {
    let summary = {}
    summary['event'] = title;
    if(user === payer) {
      summary['paid'] = total;
      for (let friend in spend) {
        summary[friend] = (friend ===payer) ? -spend[friend] : spend[friend]
      }
    } else {
        summary['paid']=0;
      for (let friend in spend) {
        summary[friend] = (friend ===payer) ? -spend[user] : 0
      }
    }
    transactionSummary[user] = summary;
  } 
  return transactionSummary;
}

// for each transaction object in a list creates a matrix-like list of objects
function createAllTransactionsSummary(input) {
  let allTransactions = [];
  input.forEach(function(transaction) {
    let transactionSummary =createTransactionSummary(transaction);
    allTransactions.push(transactionSummary);
  });
  return allTransactions;
}

//outputs the matrix-like summary by adding all transactions results
function overview(allTransactions, input) {
  let finalSummary = {};
  for(let user in input[0].spend) {
    finalSummary[user] = {};
  }
  allTransactions.forEach(function(transaction) {
    for(let user in transaction) {
      for(let friendName in transaction) { 
        finalSummary[user][friendName] = (finalSummary[user][friendName] === undefined) ? transaction[user][friendName] : (finalSummary[user][friendName] + transaction[user][friendName])
      }
    }
  });
  return finalSummary;
}

function owedByEveryoneElse(finalSummary, friendOwed) {
  let amountOwed = 0;
  for(let name in finalSummary[friendOwed]) {
    if( name !== friendOwed) {
      amountOwed += finalSummary[friendOwed][name]
    }
  }
  if (amountOwed > 0) {
    return `${friendOwed} is owed £${amountOwed.toFixed(2)}`
  } else {
    return `${friendOwed} has due payments £${amountOwed.toFixed(2)}`;
  }
}

function owedFriendToFriend(finalSummary, friend, toFriend) {
  let amountOwed = finalSummary[friend][toFriend];
  let message = ''
  switch (true) {
    case (amountOwed < 0):
      message = `${friend} owes ${toFriend} £${-amountOwed.toFixed(2)}`;
      break;
    case (amountOwed > 0):
      message = `${friend} due to receive from ${toFriend} £${amountOwed.toFixed(2)}`;
      break;
    default:
      message = `${friend} owes ${toFriend} nothing`;
  }
  return message;
}

function owedByEveryoneElseGlobal(finalSummary) {
  let owedEveryone = {};
  for (let friend in finalSummary) {
    owedEveryone[friend] = 0;
    for (let key in finalSummary[friend]) {
      let a = finalSummary[friend][key];
      owedEveryone[friend] +=  (key === friend) ? 0 :  finalSummary[friend][key]; 
    }
  }
  return owedEveryone;  
}

function settleBalances(outstandingBalances) {
  let friendToPay = [];
  let friendToReceive = [];
  let balances = Object.entries(outstandingBalances);
  balances.forEach( elem => {
    if (elem[1] > 0) {
      friendToReceive.push(elem);
    } else if (elem[1] < 0) {
      friendToPay.push([elem[0], -elem[1]]);
    }
  })
  friendToReceive.sort((a,b) => a[1] < b[1]);
  friendToPay.sort((a,b) => a[1] < b[1]);
  let transactions = '';
  while(friendToReceive.length > 0 ) {
    if ((friendToReceive[0][1] - friendToPay[0][1]) === 0) {
      transactions = transactions + `${friendToPay[0][0]} pays ${friendToReceive[0][0]} -> ${friendToPay[0][1]}\n`;
      i= i+1;
      friendToPay.shift();
      friendToReceive.shift();
      friendToReceive.sort((a,b) => a[1] < b[1]);
      friendToPay.sort((a,b) => a[1] < b[1]);
    } else if ((friendToReceive[0][1] - friendToPay[0][1]) > 0) {
      transactions = transactions + `${friendToPay[0][0]} pays ${friendToReceive[0][0]} -> ${friendToPay[0][1]} \n`;
      friendToReceive[0][1] = friendToReceive[0][1] - friendToPay[0][1];
      friendToReceive.sort((a,b) => a[1] < b[1])
      friendToPay.shift();
      friendToPay.sort((a,b) => a[1] < b[1]);
    }
    else {
      transactions = transactions + `${friendToPay[0][0]} pays ${friendToReceive[0][0]} -> ${friendToReceive[0][1]} \n`;
      friendToReceive.shift();
      if (friendToReceive[0]) {
        friendToPay[0][1] = -(friendToReceive[0][1] - friendToPay[0][1]);  
        friendToPay.sort((a,b) => a[1] < b[1]);
      }
    }
  }
  return transactions;
}

const finalResult = { Kelly: 34.5, Sam: -20, Ola: -25, Tommen: 25.5, Sandy: -15 };  
console.log(settleBalances(finalResult));

module.exports = {
  createTransactionSummary,
  createAllTransactionsSummary,
  overview,
  owedByEveryoneElse,
  owedFriendToFriend,
  owedByEveryoneElseGlobal,
  settleBalances
};