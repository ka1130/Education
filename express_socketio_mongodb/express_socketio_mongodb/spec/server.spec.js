var request = require('request');

describe('get messages', () => {
  it('returns the status code 200', (done) => {
    request.get('http://localhost:3000/messages', (error, response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it('returns a nonempty list', (done) => {
    request.get('http://localhost:3000/messages', (error, response) => {
      expect(JSON.parse(response.body).length).toBeGreaterThan(0);
      //need to parse it, otherwise it checks the amount of letters in the string, not the array length
      done();
    });
  });
});

describe('get messages from user', () => {
  it('returns the status code 200', (done) => {
    request.get('http://localhost:3000/messages/tim', (error, response) => {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });  

  it('returns proper user name', (done) => {
    request.get('http://localhost:3000/messages/tim', (error, response) => {
      expect(JSON.parse(response.body)[0].name).toEqual('tim');
      done();
    });
  });  
})