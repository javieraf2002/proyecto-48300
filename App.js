import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AgregarTrabajo, Lista, CartelModal } from "./src/components";
import Header from './src/components/Header';
import Card from "./src/components/Card";

export default function App() {

  //VARIABLES

  //Tarea
  const [tarea, setTarea] = useState("");
  //Prioridad
  const [prioridad, setPrioridad] = useState(0);
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

  const onChangePrioridad = (pri) => {
    setPrioridad(pri);
  }

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  //FUNCIONES

  const AgregarTarea = () => {
    setListaTareas((oldArry) => [...oldArry, {
      id: Date.now(),
      value: tarea,
      prioridad: prioridad,
      terminado: false
    }]);
    setTarea("");
  };

  const EliminarTarea = (id) => {
    setModalVisible(!modalVisible);
    setListaTareas((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelTarea(null);
  };

  const TerminarTarea = (id) => {
    //id a buscar
    let modificar = id;
    // sacar el index de un array
    let itemId = listaTareas.findIndex((item) => item.id === modificar);
    const reemplazo = {
      id: listaTareas[itemId].id,
      value: listaTareas[itemId].value,
      prioridad: listaTareas[itemId].prioridad,
      terminado: true,
    }
    listaTareas.splice(itemId, 1, reemplazo);
    // setListaTareas(listaTareas);
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
      <Header
        titulo='Lista de Tareas'
      />
      {/* INGRESO DE NUEVAS TAREAS */}
      <Card
        style={styles.card}
      >
        <AgregarTrabajo
          tarea={tarea}
          onChangeText={onChangeText}
          onChangePrioridad={onChangePrioridad}
          AgregarTarea={AgregarTarea}
          placeholder='Ingresar Tarea'
        />
      </Card>
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
        TerminarTarea={TerminarTarea}
        EliminarTarea={EliminarTarea}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
