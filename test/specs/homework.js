
//Homework 2
describe('Webdriverio pages', () => {
    it('should open API', async () => {
        await browser.url('https://webdriver.io');
        await $('nav a[href="/docs/api"]').click();
        await browser.pause(1000);
    });

    it('should scroll to element API references', async () => {
        const getStartedLink = await $('.footer__link-item[href="/docs/api"]');
        await getStartedLink.scrollIntoView();
        await browser.pause(2000);
    });

    it('should show if api is displayed', async () => {
        const apiDisplay = await $('.footer__link-item[href="/docs/api"]');

        await apiDisplay.isDisplayed();
        await browser.pause(2000);
    });

    it('should show if protocol commands is clickable and displayed', async () => {
        const protocol = await $('.pagination-nav__link--next[href="/docs/api/protocols"]');
        await protocol.isClickable();
        await protocol.isDisplayed();
        await browser.pause(2000);
    });

    it('should get html', async () => {
        const outerHTML = $('.pagination-nav__link--next[href="/docs/api/protocols"]').getHTML()
        console.log('Outer HTML: ' + outerHTML)

        const innerHTML = $('.pagination-nav__link--next[href="/docs/api/protocols"]').getHTML(false)
        console.log('Inner HTML: ' + innerHTML)
    });

    it('should wait until "WebDriver Protocol" is visible', async () => {
        await $('.pagination-nav__link--next[href="/docs/api/protocols"]').click();
        await browser.waitUntil(async () => {
            return $('#webdriver-protocol').isDisplayed();
        }, 5000, 'Title is not displayed');
    });
});
