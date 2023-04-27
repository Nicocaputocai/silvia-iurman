import Swal from 'sweetalert2';

export const errorAlert = (text) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: text,
      })
    }

export const sucessAlert = (text) => {
    Swal.fire({
        icon: 'success',
        title: 'OK',
        text,
        showConfirmButton: false,
        timer: 1500,
        position: 'center',
        background: '#fff',
        })
    }
