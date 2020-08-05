import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteIngredient} from './redux/actions/index';

const List = props => {
  const ingredients = useSelector(state => state.ingredients);
  const dispatch = useDispatch();
  console.log('ingredients list', ingredients);
  return (
    <FlatList
      data={ingredients}
      keyExtractor={({item, index}) => index}
      renderItem={({item, index}) => {
        console.log('item', item);
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.dot} />
                <Text>{item}</Text>
              </View>
              <Text
                onPress={() => {
                  dispatch(deleteIngredient(index));
                }}>
                remove
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
};
export default List;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: '#F88A25',
    marginTop: '10%',
    marginRight: '8%',
  },
});
