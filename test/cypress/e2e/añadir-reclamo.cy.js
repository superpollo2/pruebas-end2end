describe('Prueba para crear un reclamo', () => {
    it('Añade un reclamo de cada tipo', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(2000);
      /*Sanciones Injustas*/
      cy.get('.swal2-confirm').click();
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Reclamo').click();
      cy.wait(2000);
      cy.contains('button','Sanciones').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.get('textarea[name="descripcionPqrs"]').type('Recibí una sanción sin razón aparente. No cometí ninguna infracción durante el viaje. Necesito una revisión urgente de mi historial.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
      cy.wait(2000);
      /*Problemas de facturación*/
      cy.get('.swal2-confirm').click();
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Reclamo').click();
      cy.wait(2000);
      cy.contains('button','Problemas').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.get('textarea[name="descripcionPqrs"]').type('Mi factura refleja un costo incorrecto. El recorrido fue más corto de lo registrado. Por favor, ajusten la tarifa y emitan un reembolso correspondiente.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
      cy.wait(2000);
      /*Otros*/
      cy.get('.swal2-confirm').click();
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Reclamo').click();
      cy.wait(2000);
      cy.contains('button','Otros').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.get('textarea[name="descripcionPqrs"]').type('El conductor canceló el viaje después de aceptarlo, y ahora me están cobrando una tarifa de cancelación. Esta situación es injusta y requiere atención inmediata.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
    });
  });
  