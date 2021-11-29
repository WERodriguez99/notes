
import Swal from 'sweetalert2';

const alerts = {
    alertError: (msj: string) => {
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: msj,
            iconColor: '#bd937b',
            background: '#CDCDC0',
            confirmButtonColor: '#9A9EAB',
        })
    },

    alertSuccess: (msj: string) => {
        Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: msj,
            iconColor: '#bd937b',
            background: '#CDCDC0',
            confirmButtonColor: '#9A9EAB',
        })
    },
}

export default alerts;