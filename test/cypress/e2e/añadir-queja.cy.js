describe('Prueba para crear una queja', () => {
  it('Añade una queja de cada tipo', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(2000);
    /*Mal comportamiento */
    cy.get('.swal2-confirm').click();
    cy.wait(2000);
    cy.contains('button', 'Añadir PQRS').click();
    cy.wait(2000);
    cy.contains('button','Queja').click();
    cy.wait(2000);
    cy.contains('button','Mal').click();
    cy.wait(2000);
    cy.contains('button','Continuar').click();
    cy.wait(2000);
    cy.get('textarea[name="descripcionPqrs"]').type('El conductor fue muy grosero y se pasó un semáforo.');
    cy.wait(2000);
    cy.contains('button','Enviar').click();
    /*Estado del vehículo*/
    cy.get('.swal2-confirm').click();
    cy.wait(2000);
    cy.contains('button', 'Añadir PQRS').click();
    cy.wait(2000);
    cy.contains('button','Queja').click();
    cy.wait(2000);
    cy.contains('button','Estado').click();
    cy.wait(2000);
    cy.contains('button','Continuar').click();
    cy.wait(2000);
    cy.get('textarea[name="descripcionPqrs"]').type('El vehículo tenía un vidrio quebrado completamente.');
    cy.wait(2000);
    cy.contains('button','Enviar').click();
    /*Cobro inadecuado*/
    cy.get('.swal2-confirm').click();
    cy.wait(2000);
    cy.contains('button', 'Añadir PQRS').click();
    cy.wait(2000);
    cy.contains('button','Queja').click();
    cy.wait(2000);
    cy.contains('button','Cobro').click();
    cy.wait(2000);
    cy.contains('button','Continuar').click();
    cy.wait(2000);
    cy.get('textarea[name="descripcionPqrs"]').type('El conductor me cobro el doble a lo que debía.');
    cy.wait(2000);
    cy.contains('button','Enviar').click();
    /*Otro*/
    cy.get('.swal2-confirm').click();
    cy.wait(2000);
    cy.contains('button', 'Añadir PQRS').click();
    cy.wait(2000);
    cy.contains('button','Queja').click();
    cy.wait(2000);
    cy.contains('button','Otro').click();
    cy.wait(2000);
    cy.contains('button','Continuar').click();
    cy.wait(2000);
    cy.get('textarea[name="descripcionPqrs"]').type('La aplicación está bugeada para celulares Xiaomi.');
    cy.wait(2000);
    cy.contains('button','Enviar').click();
  });
});
