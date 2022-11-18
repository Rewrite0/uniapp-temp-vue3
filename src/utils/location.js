/**
 * 获取定位
 */
const getLocation = async () => {
  const auth = await uni.authorize({ scope: 'scope.userLocation' });
  console.log('====================================');
  console.log('auth', auth);
  console.log('====================================');

  const local = await uni.getLocation({ type: 'gcj02', geocode: true });
  console.log('====================================');
  console.log('定位', local);
  console.log('====================================');

  return local;
};

export { getLocation };
