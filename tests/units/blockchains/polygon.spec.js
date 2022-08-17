import { Blockchain } from 'src';

describe('polygon', () => {
  
  it('provides basic structured data', () => {
    let blockchain = Blockchain.findByName('polygon');
    expect(blockchain.name).toEqual('polygon');
    expect(blockchain.id).toEqual('0x89');
    expect(blockchain.networkId).toEqual('137');
    expect(blockchain.label).toEqual('Polygon');
    expect(blockchain.fullName).toEqual('Polygon Mainnet');
    expect(blockchain.logo).toEqual('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 45.4 45.4\" style=\"enable-background:new 0 0 45.4 45.4\" xml:space=\"preserve\"><path d=\"M30.2 17.7c-.6-.3-1.3-.3-1.8 0l-4.3 2.5-2.9 1.6-4.2 2.5c-.6.3-1.3.3-1.8 0l-3.3-2c-.5-.3-.9-.9-.9-1.6v-3.8c0-.7.4-1.3.9-1.6l3.3-1.9c.6-.3 1.2-.3 1.8 0l3.3 2c.6.3.9.9.9 1.6v2.5l2.9-1.7v-2.6c0-.7-.3-1.3-.9-1.6L17.1 10c-.6-.3-1.2-.3-1.8 0L9 13.7c-.6.3-.9.9-.9 1.5v7.1c0 .7.3 1.3.9 1.6l6.2 3.6c.6.3 1.2.3 1.8 0l4.2-2.4 2.9-1.7 4.2-2.4c.6-.3 1.3-.3 1.8 0l3.3 1.9c.6.3.9.9.9 1.6v3.8c0 .7-.3 1.3-.9 1.6l-3.2 1.9c-.6.3-1.2.3-1.8 0l-3.3-1.9c-.6-.3-.9-.9-.9-1.6v-2.4l-2.9 1.7v2.5c0 .7.3 1.3.9 1.6l6.1 3.6c.6.3 1.2.3 1.8 0l6.1-3.6c.6-.3.9-.9.9-1.6v-7.2c0-.7-.3-1.3-.9-1.6l-6-3.6z\" style=\"fill:#8247e5\"/></svg>');
    expect(blockchain.currency.name).toEqual('Polygon');
    expect(blockchain.currency.symbol).toEqual('MATIC');
    expect(blockchain.currency.decimals).toEqual(18);
    expect(blockchain.explorer).toEqual('https://polygonscan.com');
    expect(blockchain.rpc).toEqual('https://rpc-mainnet.matic.network');
    expect(blockchain.explorerUrlFor({
      transaction: { id: '0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f' }
    })).toEqual('https://polygonscan.com/tx/0x1907a9841e7abbc08e63586e5c9abbf7d0d42c5dc4a371304f439e2f949f51f')
    expect(blockchain.explorerUrlFor({
      token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb'
    })).toEqual('https://polygonscan.com/token/0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb')
  });
});
