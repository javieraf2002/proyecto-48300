import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const CartelModal = ({
    modalVisible,
    selTarea,
    onCancelModal,
    PosponerTarea,
    EliminarTarea,
}) => {
    return (
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
    )
}

export default CartelModal

const styles = StyleSheet.create({
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
})