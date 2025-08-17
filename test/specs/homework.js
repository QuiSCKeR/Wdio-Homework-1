//Homework 3
/*describe('Test cases', () => {

    it('should display Sign up for GitHub button', async () => {
        await browser.url('https://github.com');
        const signUpButton = await $('a[href^="/signup"]');
        await expect(signUpButton).toBeDisplayed();
    });

    it('should navigate to Sign up page', async () => {
        await browser.url('https://github.com');
        const signUpButton = await $('a[href^="/signup"]');
        await signUpButton.click();
        await browser.pause(1000);
        const url = await browser.getUrl();
        expect(url).toContain('/signup');
    });

    it('should search repositories with "car"', async () => {
    await browser.url('https://github.com');
    const openSearchBtn = await $('button[aria-label="Search or jump to…"]');
    await openSearchBtn.click();
    const searchInput = await $('input[data-target="query-builder.input"]');
    await searchInput.setValue('car');
    await browser.keys('Enter');
    await browser.pause(2000);
    const url = await browser.getUrl();
    expect(url).toContain('q=car');
});

    it('should open Pricing page', async () => {
        await browser.url('https://github.com');
        const PricingButton = await $('a[href="https://github.com/pricing"]');
        await PricingButton.click();
        await browser.pause(1000);
        const url = await browser.getUrl();
    });

    it('should display GitHub logo', async () => {
        await browser.url('https://github.com');
        const logo = await $('a[href="/"] svg');
        await expect(logo).toBeDisplayed();
    });

});
*/