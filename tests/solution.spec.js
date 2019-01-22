const chai = require('chai');
const sinon = require('sinon');
const { 
  createTransactionSummary, 
  createAllTransactionsSummary, 
  overview, 
  owedByEveryoneElse,
  owedFriendToFriend,
  owedByEveryoneElseGlobal
} = require('../solution');
const { 
  transactionInput1, 
  transactionSummary1, 
  transactionInput2, 
  transactionSummary2,
  input,
  allTransactions,
  overviewMatrix,
  outstandingBalances
} = require('../helper');

chai.should();

describe('#createTransactionSummary', () =>  {
  it('should return a matrix-like summary of the transaction1', () => {
    let summary = createTransactionSummary(transactionInput1);
    summary.should.eql(transactionSummary1);
  });
  it('should return a matrix=like summary of the transaction2', () => {
    let summary = createTransactionSummary(transactionInput2);
    summary.should.eql(transactionSummary2);
  });
});

describe('#createAllTransactionsSummary', () => {
  it('should return an array with a matrix-like summary of all transactions', () => {
    let createTransactionSummary = sinon.stub();
    createTransactionSummary.onCall(0).returns(transactionSummary1);
    createTransactionSummary.onCall(0).returns(transactionSummary2);
    let allTransactionsSummary = createAllTransactionsSummary(input);
    allTransactionsSummary.should.eql(allTransactions); 
  });
})

describe('#overview', () => {
  it('should return matrix-like object that displays who owes who', () => {
    let overviewResult = overview(allTransactions, input);
    overviewResult.should.eql(overviewMatrix); 
  });
})

describe('#owedByEveryoneElse', () => {
  it('should return the position on expenditure of Tommen', () => {
    let owedByTommen = owedByEveryoneElse(overviewMatrix, 'Tommen');
    owedByTommen.should.eql('Tommen is owed £25.50'); 
  });
})

describe('#owedByEveryoneElse', () => {
  it('should return the position on expenditure of Tommen', () => {
    let owedByTommen = owedByEveryoneElse(overviewMatrix, 'Tommen');
    owedByTommen.should.eql('Tommen is owed £25.50'); 
  });
})

describe('#owedFriendToFriend', () => {
  context('How much Ola owes Sam', () => {
    it('should return how much owes Ola to Sam', () => {
      let OlaToSam = owedFriendToFriend(overviewMatrix, 'Ola', 'Sam');
      OlaToSam.should.eql('Ola owes Sam nothing'); 
    });
  });
  context('How much Tommen owes Kelly', () => {
    it('should return how much owes Tommen to Kelly', () => {
      let TommenToKelly = owedFriendToFriend(overviewMatrix, 'Tommen', 'Kelly');
      TommenToKelly.should.eql('Tommen owes Kelly £4.5');
    });
  });
})

describe('#owedByEveryoneElseGlobal', () => {
  it('should return the oustanding balances of all friends', () => {
    let finalBalances = owedByEveryoneElseGlobal(overviewMatrix);
    finalBalances.should.eql(outstandingBalances); 
  });
})


