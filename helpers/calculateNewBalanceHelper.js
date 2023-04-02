function calculateNewBalanceHelper(type, amount, user, whatFor = 'forAdd') {
  const mult = whatFor === 'forAdd' ? 1 : -1;
  const currentBalance = parseFloat(user.currentBalance.toFixed(2));
  const sum = amount * mult;
  if (type === 'income') return currentBalance + parseFloat(sum.toFixed(2));
  return currentBalance - parseFloat(sum.toFixed(2));
}

export default calculateNewBalanceHelper;
