describe('Prueba para crear un reclamo', () => {
    it('Añade un reclamo de cada tipo', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(2000);
      /*Sanciones Injustas*/
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Reclamo').click();
      cy.wait(2000);
      cy.contains('button','Sanciones').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.get('textarea[name="description"]').type('Recibí una sanción sin razón aparente. No cometí ninguna infracción durante el viaje. Necesito una revisión urgente de mi historial.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
      cy.wait(2000);
      // Verificar que en la última fila de la tabla, en la columna "estado", aparezca la palabra "pendiente"
      cy.get('table tbody tr:last-child td:eq(3)').should('contain', 'Pendiente');
      // Verificar que en la última fila de la tabla, en la columna "tipo", aparezca la palabra "Reclamo"
      cy.get('table tbody tr:last-child td:eq(1)').should('contain', 'Reclamo');
      cy.get('table tbody tr:last-child td:eq(0)').should('contain', 'Recibí una sanción sin ra...');

      /*Problemas*/
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Reclamo').click();
      cy.wait(2000);
      cy.contains('button','Problemas').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.get('textarea[name="description"]').type('Mi factura refleja un costo incorrecto. El recorrido fue más corto de lo registrado. Por favor, ajusten la tarifa y emitan un reembolso correspondiente.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
      cy.wait(2000);
      // Verificar que en la última fila de la tabla, en la columna "estado", aparezca la palabra "pendiente"
      cy.get('table tbody tr:last-child td:eq(3)').should('contain', 'Pendiente');
      // Verificar que en la última fila de la tabla, en la columna "tipo", aparezca la palabra "Reclamo"
      cy.get('table tbody tr:last-child td:eq(1)').should('contain', 'Reclamo');
      cy.get('table tbody tr:last-child td:eq(0)').should('contain', 'Mi factura refleja un cos...');
      
      /*Otro*/
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Reclamo').click();
      cy.wait(2000);
      cy.contains('button','Otro').click();
      cy.wait(2000);
      cy.contains('button','Continuar').click();
      cy.wait(2000);
      cy.get('textarea[name="description"]').type('El conductor canceló el viaje después de aceptarlo, y ahora me están cobrando una tarifa de cancelación. Esta situación es injusta y requiere atención inmediata.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
      // Verificar que en la última fila de la tabla, en la columna "estado", aparezca la palabra "pendiente"
      cy.get('table tbody tr:last-child td:eq(3)').should('contain', 'Pendiente');
      // Verificar que en la última fila de la tabla, en la columna "tipo", aparezca la palabra "Reclamo"
      cy.get('table tbody tr:last-child td:eq(1)').should('contain', 'Reclamo');
      cy.get('table tbody tr:last-child td:eq(0)').should('contain', 'El conductor canceló el v...');

      
    });
  });
  