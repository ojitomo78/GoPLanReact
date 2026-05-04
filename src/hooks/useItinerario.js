import { useState } from 'react';
import Swal from 'sweetalert2'; // 1. Importas la librería

export const useItinerario = () => {
  const [loading, setLoading] = useState(false);

  const agregarAlItinerario = async (plan) => {
    const email = localStorage.getItem('userEmail');

    if (!email || email === "null" || email === "undefined") {
      // Mensaje de advertencia con estilo
      Swal.fire({
        title: '¡Un momento!',
        text: 'Debes iniciar sesión para armar tu viaje.',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/agregar-itinerario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, plan })
      });

      const data = await response.json();

      if (response.ok) {
        // Mensaje de éxito tipo "Toast" (notificación pequeña arriba)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${plan.titulo} guardado`,
          showConfirmButton: false,
          timer: 2000,
          toast: true // Esto lo hace ver moderno y no bloquea la pantalla
        });
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Aviso',
          text: data.error, // "Este plan ya está en tu itinerario"
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error de servidor',
        text: 'No pudimos conectar con la base de datos.',
      });
    }
  };

  return { agregarAlItinerario, loading };
};