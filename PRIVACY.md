# Privacy Policy for I Hate Tabs

_Last updated: December 2, 2025_

## Overview

I Hate Tabs is committed to protecting your privacy. This privacy policy explains how we handle your data when you use our Chrome extension.

## Data Collection

**We do NOT collect any personal data.** I Hate Tabs operates entirely on your local device.

### What We Store Locally

- **Tab Information**: URLs, titles, and favicon URLs of tabs you choose to save
- **Session Data**: Timestamps and custom names for your saved tab sessions
- **User Preferences**: Extension settings and configurations

All data is stored locally in your browser using Chrome's storage API and never transmitted to external servers.

## Data Usage

The locally stored data is used exclusively to:

- Display your saved tabs and sessions
- Restore tabs when requested
- Maintain your extension preferences
- Generate smart session names based on tab content

## Data Sharing and Third-Party Services

**We do NOT share your personal data with advertisers or data brokers.**

However, the extension interacts with the following third-party service for specific functionality:

- **Google Favicon Service**: When you import tabs from text or other sources where icons are missing, the extension may fetch favicons from Google's service (`www.google.com/s2/favicons`). This involves sending the domain name of the saved tab to Google to retrieve the icon image. This only occurs during import or manual refresh operations.

## AI and Smart Features

- **AI Session Naming**: The "AI" naming feature runs **entirely locally** on your device using pattern matching algorithms. No tab data is sent to OpenAI, Google, or any other AI provider to generate session names.

## Data Security

Your data security is ensured by:

- **Local Storage**: All data remains on your device
- **No Network Transmission**: The extension does not send data over the internet
- **Browser Protection**: Data is protected by Chrome's built-in security measures

## Data Retention

- Data persists until you manually delete it or uninstall the extension
- You can export your data for backup purposes
- You can clear all data through the extension interface

## User Control

You have complete control over your data:

- **View**: See all your saved sessions and tabs
- **Export**: Download your data in JSON format
- **Import**: Restore data from backup files
- **Delete**: Remove individual sessions or clear all data
- **Uninstall**: Remove the extension and all associated data

## Children's Privacy

Our extension does not knowingly collect information from children under 13. The extension treats all users the same regardless of age, storing only the tab information they choose to save locally.

## Changes to Privacy Policy

We may update this privacy policy occasionally. Any changes will be posted in our GitHub repository and reflected in the extension listing.

## Contact Information

If you have questions about this privacy policy, please:

- Open an issue on our [GitHub repository](https://github.com/ajhsu/i-hate-tabs/issues)
- Contact us through the Chrome Web Store developer information

## Permissions Explanation

The extension requests the following permissions:

- **tabs**: To read tab information (URL, title, favicon) when you choose to save them
- **storage**: To save your tab sessions locally on your device
- **contextMenus**: To provide right-click menu options
- **activeTab**: To interact with the currently active tab

These permissions are used solely for the extension's core functionality and do not enable any data collection or transmission.
