describe('Prueba para crear una sugerencia', () => {
    it('Añade una sugerencia', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Sugerencia').click();
      cy.wait(2000);
      cy.get('textarea[name="description"]').type('Sería beneficioso contar con una opción de notificación para informar a los conductores sobre retrasos inevitables. Esto mejoraría la comunicación durante los imprevistos.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
  
      // Verificar que en la última fila de la tabla, en la columna "estado", aparezca la palabra "pendiente"
      cy.get('table tbody tr:last-child td:eq(3)').should('contain', 'Pendiente');
      // Verificar que en la última fila de la tabla, en la columna "tipo", aparezca la palabra "Sugerencia"
      cy.get('table tbody tr:last-child td:eq(1)').should('contain', 'Sugerencia');
      cy.get('table tbody tr:last-child td:eq(0)').should('contain', 'Sería beneficioso contar ...');
    });
  });
  