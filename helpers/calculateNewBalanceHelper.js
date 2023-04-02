function calculateNewBalanceHelper(type, amount, user, whatFor = 'forAdd') {
  const mult = whatFor === 'forAdd' ? 1 : -1;
  const currentBalance = user.currentBalance.toFixed(2);
  const sum = amount * mult;
  if (type === 'income') return currentBalance + sum.toFixed(2);
  return currentBalance - sum.toFixed(2);
}

export default calculateNewBalanceHelper;
