import React, { useEffect, useState } from "react";
import { StyleSheet, Button, TextInput, View, Text, FlatList, Modal, Pressable} from "react-native";

export default function App() {

  //VARIABLES

  //Tarea
  const [tarea, setTarea] = useState("");
  //Lista de tareas ingresadas
  const [listaTareas, setListaTareas] = useState([]);
  //Estado del modal
  const [modalVisible, setModalVisible] = useState(false);
  //tarea seleccionada
  const [selTarea, setSelTarea] = useState(null);

  // EVENTOS
  
  const onChangeText = (text) => {
    setTarea(text);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  //FUNCIONES

  const AgregarTarea = () => {
    setListaTareas((oldArry) => [...oldArry, { id: Date.now(), value: tarea }]);
    setTarea("");
  };

  const EliminarTarea = (id) => {
    setModalVisible(!modalVisible);
    setListaTareas((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelTarea(null);
  }; 

  const PosponerTarea = (id) => {
    setModalVisible(!modalVisible);
    setSelTarea(null);
  }; 

  const SeleccionarTarea = (item) => {
    setSelTarea(item);
    setModalVisible(true);
  };

  // PARA VERIFICAR
  
  useEffect(()=>{
    console.log('Tareas: ', listaTareas);
  }, [listaTareas]);  

  return (
    <View style={styles.contenedor}>

      {/* TITULO DE LA PANTALLA */}
      <Text style={{
        paddingTop:40,
        color:'blue',
      }} 
      >Lista de Tareas</Text>

      {/* INGRESO DE NUEVAS TAREAS */}
      <View style={styles.contenedor_agregar}>
        <TextInput
          placeholder="Ingresar Tarea"
          style={styles.contenedor_agregar_input}
          onChangeText={onChangeText}
          value={tarea}
        />
        <Button title="Agregar" onPress={AgregarTarea} />
      </View>

      {/* LISTA DE TAREAS */}
      <FlatList 
        data={listaTareas}      
        renderItem={(itemData)=>(
          <Pressable
            style={styles.tarea}
            onPress={()=>{SeleccionarTarea(itemData.item);}}
            >
            <Text style={styles.tarea_text}>{itemData.item.value}</Text>
          </Pressable>
        )}      
        keyExtractor={(item) => item.id.toString()}
        >
      </FlatList>

      {/* CARTEL MODAL */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.contenedor_modal}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Eliminar Tarea</Text>
            <Text style={styles.modalText}>
              ¿Está seguro que desea eliminar la tarea{" "}
              <Text style={styles.modalBoldText}>{selTarea?.value}</Text>?
            </Text>
            <View style={styles.modalActions}>
              
              <Pressable
                style={[styles.btn, styles.btn_Cancelar]}
                onPress={onCancelModal}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              
              <Pressable
                style={[styles.btn, styles.btn_Posponer]}
                onPress={() => {
                  PosponerTarea(selTarea.id);
                }}
              >
                <Text style={styles.textStyle}>Posponer</Text>
              </Pressable>

              <Pressable
                style={[styles.btn, styles.btn_Eliminar]}
                onPress={() => {
                  EliminarTarea(selTarea.id);
                }}
              >
                <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>

            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 30,
    flex: 1,
  },
  contenedor_agregar: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contenedor_agregar_input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  tarea: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  tarea_text: {
    padding: 10,
    textAlign: "center",
  },
  contenedor_modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  btn_Cancelar: {
    backgroundColor: "yellow",
  },
  btn_Posponer: {
    backgroundColor: "green",
  },
  btn_Eliminar: {
    backgroundColor: "red",
  },
});
