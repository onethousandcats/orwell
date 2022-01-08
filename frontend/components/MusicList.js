import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from '../actions/ApiActionCreator';
import {Searchbar, Card} from 'react-native-paper';

const MusicList = props => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.apiReducer.data.album);
  const loading = useSelector(state => state.apiReducer.loading);

  useEffect(() => {
    dispatch(
      apiCall(
        'http://ws.audioscrobbler.com/2.0?api_key=ed2db3eb7b41b7c3e69443bc4b534115&format=json&method=artist.gettopalbums&artist=' +
          props.searchTerm,
      ),
    );
  }, []);

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.center}>
      <Searchbar
        placeholder="Search anything..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <>
              <Card.Title
                title={item.name}
                titleStyle={{fontSize: 14, marginLeft: 20}}
                subtitle={item.artist.name}
                subtitleStyle={{marginLeft: 20}}
                left={props => (
                  <Image
                    style={styles.album}
                    {...props}
                    source={{uri: item.image[2]['#text']}}
                  />
                )}
              />
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  album: {
    width: 60,
    height: 60,
  },
});

export default MusicList;
