import Swal from 'sweetalert2';

export const errorAlert = (text, timer=1500) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: text,
        timer
      })
    }

export const sucessAlert = (text, timer=1500) => {
    Swal.fire({
        icon: 'success',
        title: 'OK',
        text,
        showConfirmButton: false,
        timer,
        position: 'center',
        background: '#fff',
        })
    }
