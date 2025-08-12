
//Homework 1
describe('Webdriverio pages', () => {
    it('should have open API', async () => {
        await browser.url('https://webdriver.io');
        await $('=API').click();
        await browser.pause(1000);
    });
    it('should have correct website link', async () => {
        const url = await browser.getUrl();
        console.log('Current url is: ' + url);
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api');
    });
    it('should have correct Article', async () => {
        const Article = await $("h1").getText();
        console.log('Current Article is: ' + Article);
        await expect($('h1')).toHaveText('Introduction');
    });
    it('should have correct attribute link', async () => {
        const link = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/div[2]/p[1]/a[1]').getAttribute('href');
        console.log('Current Text link is: ' + link);
        await expect(link).toBe('/docs/api/webdriver');
    });
    it('should have write a text in search content', async () => {
        await $('.DocSearch-Button').click();
        const SearchInput = await $('.DocSearch-Input');
        await SearchInput.setValue('All is done');
        await browser.pause(2000);
        await SearchInput.clearValue();
    });
});
