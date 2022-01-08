import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import MusicList from './MusicList';

const HomeRoute = () => <MusicList searchTerm="MF Doom" />;
const SearchRoute = () => <MusicList searchTerm="Helena Deland" />;
const ExploreRoute = () => <MusicList searchTerm="Lucy Dacus" />;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'search', title: 'Search', icon: 'magnify'},
    {key: 'explore', title: 'Explore', icon: 'compass'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    explore: ExploreRoute,
  });

  return (
    <BottomNavigation
      labeled={false}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
