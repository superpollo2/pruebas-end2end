describe('Prueba para crear una queja', () => {
  it('Añade una queja de cada tipo', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(2000);
    /*Mal comportamiento */
    cy.wait(2000);
    cy.contains('button', 'Añadir PQRS').click();
    cy.wait(2000);
    cy.contains('button','Queja').click();
    cy.wait(2000);
    cy.contains('button','Mal').click();
    cy.wait(2000);
    cy.contains('button','Continuar').click();
    cy.wait(2000);
    cy.get('textarea[name="description"]').type('El conductor fue muy grosero y se pasó un semáforo.');
    cy.wait(2000);
    cy.contains('button','Enviar').click();
    cy.get('table tbody tr:last-child td:eq(3)').should('contain', 'Pendiente');
    cy.get('table tbody tr:last-child td:eq(1)').should('contain', 'Queja');
    cy.get('table tbody tr:last-child td:eq(0)').should('contain', 'El conductor fue muy gros...');

    /*Estado del vehículo*/
    cy.wait(2000);
    cy.contains('button', 'Añadir PQRS').click();
    cy.wait(2000);
    cy.contains('button','Queja').click();
    cy.wait(2000);
    cy.contains('button','Estado').click();
    cy.wait(2000);
    cy.contains('button','Continuar').click();
    cy.wait(2000);
    cy.get('textarea[name="description"]').type('El vehículo tenía un vidrio quebrado completamente.');
    cy.wait(2000);
    cy.contains('button','Enviar').click();
    cy.get('table tbody tr:last-child td:eq(3)').should('contain', 'Pendiente');
    cy.get('table tbody tr:last-child td:eq(1)').should('contain', 'Queja');
    cy.get('table tbody tr:last-child td:eq(0)').should('contain', 'El vehículo tenía un vidr...');
    /*Cobro inadecuado*/
    cy.wait(2000);
    cy.contains('button', 'Añadir PQRS').click();
    cy.wait(2000);
    cy.contains('button','Queja').click();
    cy.wait(2000);
    cy.contains('button','Cobro').click();
    cy.wait(2000);
    cy.contains('button','Continuar').click();
    cy.wait(2000);
    cy.get('textarea[name="description"]').type('El conductor me cobro el doble a lo que debía.');
    cy.wait(2000);
    cy.contains('button','Enviar').click();
    cy.get('table tbody tr:last-child td:eq(3)').should('contain', 'Pendiente');
    cy.get('table tbody tr:last-child td:eq(1)').should('contain', 'Queja');
    cy.get('table tbody tr:last-child td:eq(0)').should('contain', 'El conductor me cobro el ...');
    
    
    
   

   

    
  });
});
