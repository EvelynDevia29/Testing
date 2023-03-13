import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {
  
  await page.goto('http://uitestingplayground.com/textinput');

  //verificar que el input es visible
  await expect(page.locator('#newButonName')).toBeVisible();
 
  //seleccionar el input y escribir en el input un texto
  await page.locator('#newButtonName').fill('Monica');

  await page.pause();


  //dar click en el boton
  await page.locator('#updatingButton').click();

  //verificar que el button cambie con el texto ingresado en el inputtext
  await expect(page.locator('#updatingButton')).toContainText('Monica');



  
});
