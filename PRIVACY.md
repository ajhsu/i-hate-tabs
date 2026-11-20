# Privacy Policy for I Hate Tabs

_Last updated: November 20, 2026_

**Short version:** your saved tabs stay in your browser, unless you turn on sync. The extension sends usage statistics, and they never include your tabs. We sell nothing to anyone.

## What the extension stores on your computer

- The address, title, and icon address of each tab that you save.
- The names and dates of your sessions, and your settings.

The extension keeps this data in your browser, in Chrome's storage for extensions. It reads your tabs only when you save them. It does not watch the pages that you visit.

## Optional sync

Sync is off until you create an account and sign in. When you sign in:

- Your email address and password go to Firebase Authentication, a Google service, to sign you in.
- Your saved sessions, tabs, and settings go to Cloud Firestore, a Google service, so that your other computers can get them.

Only your account can read its cloud data. To delete it, open Account Settings and choose **Delete Cloud Data**. When you sign out, sync stops, and your tabs stay on your computer.

## Usage statistics

The extension sends usage events to Google Analytics. For example: "a session was saved with 12 tabs", or "the sessions page was opened". Each event carries a random ID for your installation, and counts such as the number of saved sessions and tabs. The events never include the addresses or titles of your tabs, or your email address. When an error occurs, the extension sends the error message, so that we can fix the bug. There is no setting to turn usage statistics off yet.

## Site icons

To show site icons, the sessions page loads the icon address of each saved tab. That address usually belongs to the site itself. When you import tabs or refresh icons, the extension also asks Google's favicon service (`www.google.com/s2/favicons`) for icons. Each of those requests sends the domain name of one site, for example `github.com`.

## Session names

Smart naming runs on your computer. It does not send your tabs to any AI service.

## The website

The website at ihatetabs.com has no cookies, no analytics, and no third-party scripts or fonts. Its hosting provider processes each request to deliver the pages and to protect them from attacks.

## What we do not do

- We do not sell your data, or share it with advertisers or data brokers.
- We do not use your data for anything other than the features in this policy.
- We do not use your data to decide creditworthiness or for lending.

## Your control

- Delete a tab, a session, or everything (Settings, then **Clear All Data**).
- Export your data to a JSON file at any time (Settings, then **Export JSON**).
- Delete your cloud data, or never turn on sync.
- Uninstall the extension to remove its data from your browser.

## Permissions

- **tabs**: read the address and title of your tabs when you save them, and open them again.
- **storage**: keep your sessions and settings in your browser.
- **activeTab**: work with the current window when you click the toolbar button.
- **contextMenus**: add "Save all tabs" and "Show hated tabs" to the right-click menus.
- `www.google.com` and `gstatic.com`: load site icons from Google's favicon service.

The next version adds two permissions:

- **unlimitedStorage**: keep large collections, without Chrome's 10 MB limit.
- **alarms**: run sync every 15 minutes, when sync is on.

## Children

The extension is not for children under 13, and we do not knowingly collect their data.

## Changes

We post changes to this policy on this page, with a new date at the top.

## Contact

Questions? [Open an issue on GitHub](https://github.com/ajhsu/i-hate-tabs/issues).
