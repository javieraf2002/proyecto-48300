import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from './src/components/Header';
import Principal from "./src/components/Screens/Principal";
import Ayuda from "./src/components/Screens/Ayuda";

export default function App() {

  //VARIABLES

  //Tarea
  const [tarea, setTarea] = useState("");
  //Lista de tareas ingresadas
  const [listaTareas, setListaTareas] = useState([]);
  //Prioridad
  const [prioridad, setPrioridad] = useState(0);
  //Estado del modal
  const [modalVisible, setModalVisible] = useState(false);
  //tarea seleccionada
  const [selTarea, setSelTarea] = useState(null);
  //switch entre pantallas
  const [principal, setPrincipal] = useState(true);

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

  const VerPrincipal = (estado) => {
    setPrincipal(estado);
  }

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
      {/* PANTALLA PRINCIPAL */}
      {
        principal
          ? <Principal
            listaTareas={listaTareas}
            tarea={tarea}
            modalVisible={modalVisible}
            selTarea={selTarea}
            onChangeText={onChangeText}
            onChangePrioridad={onChangePrioridad}
            onCancelModal={onCancelModal}
            AgregarTarea={AgregarTarea}
            EliminarTarea={EliminarTarea}
            TerminarTarea={TerminarTarea}
            SeleccionarTarea={SeleccionarTarea}
            Press={VerPrincipal}
          ></Principal>
          : <Ayuda Press={VerPrincipal}></Ayuda>
      }
    </View >
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
});
