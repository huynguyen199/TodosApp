import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTodos,
  deleteTodos,
  compoletedTodo,
  postTodos,
} from '../redux/Action/Todos.Action';
import selector from '../redux/selector/index';
import {CheckBox} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const Item = ({item}) => {
  const dispatch = useDispatch();

  const onDeleteTodo = id => {
    dispatch(deleteTodos(id));
  };
  return (
    <View style={styles.itemTodo}>
      <View
        style={{
          flex: 0.8,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <CheckBox
          checked={item.completed}
          onPress={() => dispatch(compoletedTodo(item.id))}
        />
        <Text>{item.title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onDeleteTodo(item.id)}
        style={styles.btnDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

function random() {
  const min = 0;
  const max = 999999;
  return ~~(Math.random() * (max - min + 1) + min);
}

const TodoScreen = () => {
  const dispatch = useDispatch();
  // dispatch(addTodos(0));
  const todos = useSelector(selector.selectorTodos);
  console.log(
    'DEBUG: - file: TodoScreen.js - line 69 - TodoScreen - todos',
    todos,
  );
  const [todo, setTodo] = useState('');

  const onAddTodo = () =>
    dispatch(postTodos({id: random(), title: todo, completed: false}));

  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.boxTodos}>
        <Text style={styles.txtTitle}>To DO List</Text>
        <View style={styles.boxInput}>
          <TextInput style={styles.input} onChangeText={setTodo} value={todo} />
          <TouchableOpacity onPress={onAddTodo}>
            <View style={styles.boxAdd}>
              <Text style={styles.txtAdd}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  boxTodos: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 40,
  },
  txtTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  boxInput: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-between',
  },
  input: {
    width: width / 2 + 40,
    height: 40,
    borderColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
    padding: 10,
  },
  boxAdd: {
    width: 50,
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtAdd: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemTodo: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: 50,
    marginTop: 10,
  },
  btnDelete: {
    backgroundColor: 'blue',
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TodoScreen;
