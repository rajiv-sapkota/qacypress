import admin from "../pages/adminPage";
import addCandidates from "../fixtures/addCandidates.json";

describe("login test", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should test a user does not exist", () => {
    const adminObj = new admin();
    adminObj.menuIsVisible();
    adminObj.clickAdmin();
    adminObj.typeUsername();
    adminObj.clickSearch();
    adminObj.verifyUser();
  });

  it.only("should add candidate with fixture", () => {
    cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.fixture("addCandidates.json").then((data) => {
      cy.get(".orangehrm-firstname").type(data.firstName);
      cy.get("orangehrm-lastname").type(data.lastName);
      cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type(data.email);
      //cy.get(".oxd-file-input").eq(0).attachFile("resume.pdf");
    });
  });
  it("API get method", () => {
    cy.contains("Claim").click();
    cy.request({
      method: "GET",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/events?limit=0&status=true",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.keys("data", "meta", "rels");
      expect(response.body.meta).to.deep.include({
        total: 3,
      });
    });
  });
  it("should work with POST and PUT requests", () => {
    cy.contains("Buzz").click();
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/posts",
      body: {
        type: "text",
        text: "Post by Rajiv",
      },
    }).then((response) => {
      expect(response.status).to.be.eq(200);
      cy.get(".orangehrm-buzz-post-body-text").eq(0).should("be.visible");
    });
    cy.reload();
    //cy.get(".bi-three-dots").eq(0).click();
    cy.request({
      method: "PUT",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/posts/14?model=detailed",
      body: {
        type: "text",
        text: "edit from automation",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.reload();
    });
  });
  it("should verify mobile responsiveness", () => {
    cy.viewport("iphone-6");
    cy.wait(2000);
    cy.get(".oxd-topbar-header-hamburger").should("be.visible");
  });
});
