/*import MainPage from '../pages/main.page.js';
import { expect } from 'chai';

describe('DOU navigation and checks', () => {
    it('should check salaries page for "квартал"', async () => {
        await browser.url('https://dou.ua/?from=button');
        await MainPage.salariesBtn.click();
        await browser.pause(2000);

        const bodyText = await $('body').getText();
        expect(bodyText.toLowerCase()).to.include('квартиль');
    });

    it('should check job page for "знайти" button and "швидкий перехід" text', async () => {
        await browser.url('https://dou.ua/?from=button');
        const jobBtn = await $('a[href="https://jobs.dou.ua/"]');
        await jobBtn.click();
        await browser.pause(2000);

        const findBtn = await $('input[type="submit"]');
        await expect(await findBtn.isDisplayed()).to.be.true;
        await findBtn.click();
        await browser.pause(2000);

        const bodyText = await $('body').getText();
        expect(bodyText.toLowerCase()).to.include('швидкий перехід');
    });

    it('should check lenta page for news and articles', async () => {
    await browser.url('https://dou.ua');
    await MainPage.bandBtn.waitForDisplayed({ timeout: 5000 });
    await MainPage.bandBtn.click();
    await browser.pause(2000);

    const bodyText = await $('body').getText();
    expect(bodyText.toLowerCase()).to.include('новини');
    expect(bodyText.toLowerCase()).to.include('статті');
});


});*/