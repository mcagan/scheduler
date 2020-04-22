describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");

    cy.visit("/");

    cy.contains("[data-testid=day]", "Monday");
  });
  it("should book an interview", () => {
    cy.get("[alt=Add]").first().click();
    cy.get("[name=name]").type("Lydia Miller-Jones");
    cy.get("[alt='Sylvia Palmer']").click();
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });
  it("should edit an interview", () => {
    cy.get("[alt=Edit]").click({ force: true });
    cy.get("[name=name]").should("have.value", "Archie Cohen");
    cy.get("li").should(
      "have.class",
      "interviewers__item interviewers__item--selected"
    );
    cy.get("[name=name]").clear().type("Melis Cagan");
    cy.get("[alt='Tori Malcolm']").click();
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Melis Cagan");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });
  it("should delete an interview", () => {
    cy.get("[alt=Delete]").click({ force: true });
    cy.contains("Are you sure you want to delete interview?");
    cy.contains("Confirm").click();
    cy.contains("Deleting...").should("exist");
    cy.contains("Deleting...").should("not.exist");
    cy.contains("Archie Cohen").should("not.exist");
  });
});
