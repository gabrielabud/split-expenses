module.exports = {
  transactionInput1: { 
    title: 'lunch', 
    spend: 
      { Kelly: 10, 
        Sam: 10, 
        Ola: 10, 
        Tommen: 
        10, 
        Sandy: 10
      }, 
    total: 45.5,
    payer: 'Kelly' 
  },
  transactionInput2: {
    title: 'dinner', 
    spend: 
      {
        Kelly: 5.5, 
        Sam: 10,
        Ola: 15,
        Tommen: 10,
        Sandy: 5
      }, 
    total: 50, 
    payer: 'Tommen' 
  },
  transactionSummary1: { 
    Kelly: { 
      event: 'lunch',
      paid: 45.5,
      Kelly: -10,
      Sam: 10,
      Ola: 10,
      Tommen: 10,
      Sandy: 10 
    },
    Sam: { 
      event: 'lunch',
      paid: 0,
      Kelly: -10,
      Sam: 0,
      Ola: 0,
      Tommen: 0,
      Sandy: 0 
    },
    Ola: { 
      event: 'lunch',
      paid: 0,
      Kelly: -10,
      Sam: 0,
      Ola: 0,
      Tommen: 0,
      Sandy: 0 
    },
    Tommen: { 
      event: 'lunch',
      paid: 0,
      Kelly: -10,
      Sam: 0,
      Ola: 0,
      Tommen: 0,
      Sandy: 0 
    },
    Sandy: { 
      event: 'lunch',
      paid: 0,
      Kelly: -10,
      Sam: 0,
      Ola: 0,
      Tommen: 0,
      Sandy: 0 
    } 
  },
  transactionSummary2: {
    Kelly: { 
      event: 'dinner',
      paid: 0,
      Kelly: 0,
      Sam: 0,
      Ola: 0,
      Tommen: -5.5,
      Sandy: 0 
    },
    Sam: { 
      event: 'dinner',
      paid: 0,
      Kelly: 0,
      Sam: 0,
      Ola: 0,
      Tommen: -10,
      Sandy: 0
    },
    Ola: {
      event: 'dinner',
      paid: 0,
      Kelly: 0,
      Sam: 0,
      Ola: 0,
      Tommen: -15,
      Sandy: 0 
    },
    Tommen: { 
      event: 'dinner',
      paid: 50,
      Kelly: 5.5,
      Sam: 10,
      Ola: 15,
      Tommen: -10,
      Sandy: 5 },
    Sandy: { 
      event: 'dinner',
      paid: 0,
      Kelly: 0,
      Sam: 0,
      Ola: 0,
      Tommen: -5,
      Sandy: 0 
    } 
  },
  input: 
  [
    { 
      title: 'lunch',
      spend: 
        {
          Kelly: 10, 
          Sam: 10,
          Ola: 10,
          Tommen: 10,
          Sandy: 10
        }, 
      total: 45.5, 
      payer: 'Kelly' 
    }, 
    { 
      title: 'dinner', 
      spend: 
        {
          Kelly: 5.5, 
          Sam: 10,
          Ola: 15,
          Tommen: 10,
          Sandy: 5
        }, 
      total: 50, 
      payer: 'Tommen' 
    }
  ],
  allTransactions: [ { Kelly:
    { event: 'lunch',
      paid: 45.5,
      Kelly: -10,
      Sam: 10,
      Ola: 10,
      Tommen: 10,
      Sandy: 10 },
   Sam:
    { event: 'lunch',
      paid: 0,
      Kelly: -10,
      Sam: 0,
      Ola: 0,
      Tommen: 0,
      Sandy: 0 },
   Ola:
    { event: 'lunch',
      paid: 0,
      Kelly: -10,
      Sam: 0,
      Ola: 0,
      Tommen: 0,
      Sandy: 0 },
   Tommen:
    { event: 'lunch',
      paid: 0,
      Kelly: -10,
      Sam: 0,
      Ola: 0,
      Tommen: 0,
      Sandy: 0 },
   Sandy:
    { event: 'lunch',
      paid: 0,
      Kelly: -10,
      Sam: 0,
      Ola: 0,
      Tommen: 0,
      Sandy: 0 } },
 { Kelly:
    { event: 'dinner',
      paid: 0,
      Kelly: 0,
      Sam: 0,
      Ola: 0,
      Tommen: -5.5,
      Sandy: 0 },
   Sam:
    { event: 'dinner',
      paid: 0,
      Kelly: 0,
      Sam: 0,
      Ola: 0,
      Tommen: -10,
      Sandy: 0 },
   Ola:
    { event: 'dinner',
      paid: 0,
      Kelly: 0,
      Sam: 0,
      Ola: 0,
      Tommen: -15,
      Sandy: 0 },
   Tommen:
    { event: 'dinner',
      paid: 50,
      Kelly: 5.5,
      Sam: 10,
      Ola: 15,
      Tommen: -10,
      Sandy: 5 },
   Sandy:
    { event: 'dinner',
      paid: 0,
      Kelly: 0,
      Sam: 0,
      Ola: 0,
      Tommen: -5,
      Sandy: 0 } } ],
  overviewMatrix: { 
    Kelly: { Kelly: -10, Sam: 10, Ola: 10, Tommen: 4.5, Sandy: 10 },
    Sam: { Kelly: -10, Sam: 0, Ola: 0, Tommen: -10, Sandy: 0 },
    Ola: { Kelly: -10, Sam: 0, Ola: 0, Tommen: -15, Sandy: 0 },
    Tommen: { Kelly: -4.5, Sam: 10, Ola: 15, Tommen: -10, Sandy: 5 },
    Sandy: { Kelly: -10, Sam: 0, Ola: 0, Tommen: -5, Sandy: 0 } 
  },
  outstandingBalances: { Kelly: 34.5, Sam: -20, Ola: -25, Tommen: 25.5, Sandy: -15 }   
};