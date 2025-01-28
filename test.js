// Solicita el ID de medición de GA4 al usuario
(function () {
    const measurementId = prompt('Introduce el ID de medición de GA4 (por ejemplo, G-XXXXXXXXXX):');
    
    if (!measurementId) {
        console.error('No se proporcionó un ID de medición. Inténtalo de nuevo.');
        return;
    }

    try {
        // Asegúrate de que gtag.js esté cargado
        if (typeof gtag === 'undefined') {
            console.error('GA4 no está configurado correctamente o gtag.js no está cargado.');
            return;
        }

        // Recupera el clientId
        gtag('get', measurementId, 'client_id', (clientId) => {
            if (clientId) {
                console.log(`Client ID de GA4 (${measurementId}):`, clientId);
            } else {
                console.error('No se pudo recuperar el Client ID de GA4.');
            }
        });
    } catch (error) {
        console.error('Error al recuperar el Client ID de GA4:', error);
    }
})();
