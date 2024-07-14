
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 12.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('146.38')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 8,
    rate: 8.0
  };
  expect(calculateMonthlyPayment(values)).toEqual('141.37')
});

/// etc
