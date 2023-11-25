describe('Prueba para crear una felicitación', () => {
    it('Añade una felicitacion', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Felicitación').click();
      cy.wait(2000);
      cy.get('textarea[name="description"]').type('Felicidades a su equipo de atención al cliente. Resolvieron mi problema de manera rápida y eficiente. Su dedicación a la satisfacción del cliente es evidente y apreciada.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();

      // Verificar que en la última fila de la tabla, en la columna "estado", aparezca la palabra "pendiente"
      cy.get('table tbody tr:last-child td:eq(3)').should('contain', 'Pendiente');
      // Verificar que en la última fila de la tabla, en la columna "tipo", aparezca la palabra "Felicitacion"
      cy.get('table tbody tr:last-child td:eq(1)').should('contain', 'Felicitación');
      cy.get('table tbody tr:last-child td:eq(0)').should('contain', 'Felicidades a su equipo d...');
    });
  });
  