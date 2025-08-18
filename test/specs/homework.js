describe('Finale test', () => {

    it('sign up on GitHub', async () => {
    await browser.url('https://github.com/')
    await $('=Sign up').click()

    const signupForm = await $('#signup-form-fields')
    await signupForm.waitForDisplayed({ timeout: 10000 })

    await $('#email').setValue('testemail@example.com')
    await $('#password').setValue('Password123!')
    await $('#login').setValue('TestUser')

    const consentBanner = await $('#wcpConsentBannerCtrl')
    if (await consentBanner.isDisplayed()) {
        const closeBtn = await consentBanner.$('button')
        await closeBtn.waitForClickable({ timeout: 5000 })
        await closeBtn.click()
        await consentBanner.waitForDisplayed({ reverse: true, timeout: 5000 }) 
    }

    const marketingCheckbox = await $('input[type="checkbox"]')
    await marketingCheckbox.waitForClickable({ timeout: 5000 })
    await marketingCheckbox.click()

    const createAccountBtn = await $('.js-octocaptcha-load-captcha')
    await createAccountBtn.waitForDisplayed({ timeout: 10000 })
    await createAccountBtn.click()
})



    it('should scroll and check GitHub copilot', async () => {
        await browser.url('https://github.com')
        const heading = await $('h2=Millions of developers and businesses call GitHub home')
        await heading.scrollIntoView();
        await expect(heading).toBeDisplayed()

        const copilotBtn = await $('a=Try GitHub Copilot')
        await browser.execute("arguments[0].click();", copilotBtn)

        const header = await $('h1=Try Copilot Pro for 30 days free')
        await expect(header).toBeDisplayed();

        const tryNowButton = await $('button.Button--primary')
        await tryNowButton.click()
    });



    it('should scroll to Subscribe button, check it, click and fill form', async () => {
        await browser.url('https://github.com')

        const subscribeBtn = await $('a.btn-mktg.mb-4.btn-muted-mktg');
        await subscribeBtn.scrollIntoView()
        await expect(subscribeBtn).toBeDisplayed()
        await expect(subscribeBtn).toBeClickable()
        await subscribeBtn.click()

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('resources.github.com/newsletter'),
            {
                timeout: 10000,
                timeoutMsg: 'Newsletter page did not load in time'
            }
    );

    const heading = await $('h1#hero-section-brand-heading')
    await heading.waitForDisplayed({ timeout: 10000 })
    await expect(heading).toHaveText('Subscribe to our developer newsletter')

    const emailInput = await $('input[name="emailAddress"]')
    await emailInput.setValue('testemail@example.com')

    const countrySelect = await $('select[name="country"]')
    await countrySelect.selectByAttribute('value', 'UA')

    const checkbox = await $('#gated-agree-marketingEmailOptin1')
    await checkbox.click()

    const subscribeFormBtn = await $('button[type="submit"]')
    await subscribeFormBtn.click()

    const successHeading = await $('h1#hero-section-brand-heading')
    await successHeading.waitForDisplayed({ timeout: 10000 })
    await expect(successHeading).toHaveText('Thanks for subscribing!')
    });



    it('should search for "act" on GitHub and check results', async () => {
        await browser.url('https://github.com/')

        const searchBtn = await $('button.header-search-button')
        await searchBtn.waitForClickable({ timeout: 10000 })
        await searchBtn.click()

        const searchInput = await $('#query-builder-test')
        await searchInput.waitForDisplayed({ timeout: 10000 })
        await searchInput.setValue('act')
        await browser.keys('Enter')

        const firstResult = await $('div.Box-sc-g0xbh4-0.MHoGG.search-title')
        await firstResult.waitForDisplayed({ timeout: 10000 })

        const results = await $$('div.Box-sc-g0xbh4-0.MHoGG.search-title')

        let found = false
        for (const r of results) {
            const text = await r.getText()
            if (text.toLowerCase().includes('act')) {
                found = true
                break
            }
        }

        await expect(found).toBe(true)
    });


    it('should open Pricing page, check heading, scroll and click Compare all features', async () => {
        await browser.url('https://github.com/');

        const pricingLink = await $('a[href="https://github.com/pricing"]');
        await pricingLink.waitForClickable({ timeout: 10000 });
        await pricingLink.click();

        const pricingHeading = await $('h1.h2-mktg=Try the Copilot-powered platform');
        await pricingHeading.waitForDisplayed({ timeout: 10000 });
        await expect(pricingHeading).toBeDisplayed();

        const compareLink = await $('a[href="#compare-features"]');
        await compareLink.scrollIntoView();
        await compareLink.waitForClickable({ timeout: 10000 });
        await compareLink.click();

        const compareHeading = await $('h1.h1=Compare features');
        await compareHeading.waitForDisplayed({ timeout: 10000 });
        await expect(compareHeading).toBeDisplayed();
    });

});
