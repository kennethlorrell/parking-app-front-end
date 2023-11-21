const useNavList = (isAuthenticated) => {
  const navList = [
    {
      name: 'Home',
      href: '/'
    }
  ];

  if (isAuthenticated) {
    navList.push(...[
      {
        name: 'Vehicles',
        href: '/vehicles'
      },
      {
        name: 'Parkings',
        href: '/parkings/active'
      }
    ]);
  }

  return navList;
};

export default useNavList;