import Swal from "sweetalert2";
import withReactcontent from "sweetalert2-react-content";

const Alert = withReactcontent(Swal);

export const msjConfirmacion = "Le solicitamos esperar un momento a que la solicitud termine";
export const titleConfirmacion = "¿Esta seguro de realizar la accion solicitada?";
export const msjExito = "La actividad solicitada se ha realizado de manera exitosa";
export const titleExito = "Accion realizada exitosamente";
export const msjError = "No se ha logrado realizar la actividad solicidad, le recordamos contactar a soporte tecnico";
export const titleError = "Error al realizar la accion";
export default Alert;