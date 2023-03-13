import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  //IR A LA PAGINA DE LA PRUEBA
  await page.goto("https://automationexercise.com/");

  //await page.locator('.nav > li >a >> nth=16').click(); //esta es la linea si no apareciera esa ventana emergente

  await page.goto("https://automationexercise.com/product_details/1");

  // //PONER 2 EN LA CAJA DE TEXTO
  await page.locator("#quantity").fill("2");

  // //DAR CLIC EN BOTON AGREGAR AL CARRITO
  await page.locator(".btn >> nth=1").click();

  // //DAR CLIC EN BOTON DEL MODAL SEGUIR COMPRANDO
  await page.locator(".btn >> nth=0").click();

  await page.goto("https://automationexercise.com/view_cart");

  await page.locator(".btn >> nth= 0").click();

  await page.locator(".btn-block >> nth=0").click();

  // //no visible la modal de mas shoppin

  // await expect(page.locator('.modal-content')).not.toBeVisible();
});
