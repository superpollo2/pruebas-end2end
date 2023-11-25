describe('Prueba para crear una petición', () => {
    it('Añade una petición', () => {
      cy.visit('http://localhost:3000/');
      cy.wait(2000);
      cy.contains('button', 'Añadir PQRS').click();
      cy.wait(2000);
      cy.contains('button','Petición').click();
      cy.wait(2000);
      cy.get('textarea[name="description"]').type('Me gustaría que mi tarifa de mi último viaje se revise ya que me cobraron algo diferente a lo que decía la app.');
      cy.wait(2000);
      cy.contains('button','Enviar').click();
      // Verificar que en la última fila de la tabla, en la columna "estado", aparezca la palabra "pendiente"
      cy.get('table tbody tr:last-child td:eq(3)').should('contain', 'Pendiente');
      // Verificar que en la última fila de la tabla, en la columna "tipo", aparezca la palabra "Petición"
      cy.get('table tbody tr:last-child td:eq(1)').should('contain', 'Petición');
      cy.get('table tbody tr:last-child td:eq(0)').should('contain', 'Me gustaría que mi tarifa...');
  
    });
  });
  