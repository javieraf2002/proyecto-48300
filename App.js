import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AgregarTrabajo, Lista, CartelModal } from "./src/components";

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

  useEffect(() => {
    console.log('Tareas: ', listaTareas);
  }, [listaTareas]);

  return (
    <View style={styles.contenedor}>

      {/* TITULO DE LA PANTALLA */}
      <Text style={{
        paddingTop: 40,
        color: 'blue',
      }}
      >Lista de Tareas</Text>

      {/* INGRESO DE NUEVAS TAREAS */}
      <AgregarTrabajo
        tarea={tarea}
        onChangeText={onChangeText}
        AgregarTarea={AgregarTarea}
        placeholder='Ingresar Tarea'
        title='Agregar'
      />
      {/* LISTA DE TAREAS */}
      <Lista
        listaTareas={listaTareas}
        SeleccionarTarea={SeleccionarTarea}
      />
      {/* CARTEL MODAL */}
      <CartelModal
        modalVisible={modalVisible}
        selTarea={selTarea}
        onCancelModal={onCancelModal}
        PosponerTarea={PosponerTarea}
        EliminarTarea={EliminarTarea}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 30,
    flex: 1,
  },
});
