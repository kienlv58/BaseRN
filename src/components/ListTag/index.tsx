import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from 'components/Text';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#388e3c',
    margin: 5,
    marginLeft: 0,
    padding: 5,
    paddingHorizontal: 7,
    borderRadius: 20,
    flexDirection: 'row',
  },
  textTag: {
    color: '#fff',
  },
});

const fakeData = ['Ngôn tình ngược cưới trước yêu sau', 'Ngôn tình', 'Sung'];
const ListTag = () => {
  return (
    <View style={styles.wrapper}>
      {fakeData.map(item => (
        <TouchableOpacity
          key={item}
          style={styles.tag}
          activeOpacity={0.5}
          onPress={() => {}}>
          <Text text="#" style={styles.textTag} />
          <Text text={item} style={styles.textTag} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListTag;
