# UK Corporation Tax Workbench: installable app

## What is in this folder
| Item | What it is |
|---|---|
| `index.html` | The whole application |
| `manifest.webmanifest`, `sw.js`, `icons/` | What makes it installable and able to work offline |
| `lib/` | Excel and PDF readers, bundled so nothing is downloaded at run time |
| `desktop/` | Optional: builds a Windows installer (.exe). Untested, see Option B |

## Step 1. Put it online (free, once)
1. On GitHub, open your repository. If it holds the old "Tax-search" placeholder page, you will replace it.
2. Click Add file, then Upload files. Open this folder on your computer, select everything inside it (not the zip itself) and drag it in. `index.html`, `sw.js`, `manifest.webmanifest`, `icons` and `lib` must all sit in the top level of the repository. Keep `desktop` too if you want it.
3. Commit changes. Open Settings, then Pages. Choose Deploy from a branch, main, / (root), Save.
4. After 1 to 2 minutes your address is `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. Open it and press Ctrl+F5.

## Step 2. Install it on your PC
1. Open that address in Chrome or Edge.
2. Click the Install app button at the top right of the page. If it is not there, use the install icon at the right end of the address bar, or in Edge the menu, Apps, Install this site as an app.
3. It opens in its own window, gets a Start menu entry, and you can pin it to the taskbar.
4. After the first open it works offline.

If there is no install option: it must be opened from the https address, not by double-clicking the file. Open DevTools (F12), Application, Manifest, and read the errors listed.
Phone: Chrome on Android offers Install app. On iPhone use Safari, Share, Add to Home Screen.

## Using the Chrome tab and the installed app together
- Both open the same address, so they share the same cases and settings, as long as they are in the same browser (Chrome with Chrome, or Edge with Edge). Edits in one window appear in the other within a moment.
- Still, work in one window at a time. If you type in both at once, the last change wins.
- Different browsers, different computers, phones, and a file opened by double-clicking do not share data. Each keeps its own copy. To move a case: Settings, Export case, copy the text, then on the other side Settings, paste into the box and press Import from box.
- Cases are never uploaded to a server, so there is no cloud backup. Export regularly.

## Step 3. Updating
Upload the new files over the old ones, then raise the version number in `sw.js` (it currently says `const V = 'ctw-v2'`; make it `'ctw-v3'`, then `'ctw-v4'` and so on). Installed copies refresh the next time they open with internet. Close and reopen the app twice if it still shows the old version.

## Option B. A real Windows installer (.exe)
1. Install Node.js LTS from nodejs.org.
2. Open Command Prompt in the `desktop` folder.
3. Run `npm install`, then `npm run dist`.
4. The installer and a portable .exe appear in `desktop\dist`.
Windows SmartScreen will warn because the file is not code-signed: choose More info, then Run anyway.
I could not build a Windows .exe in my environment, so this route is untested. The installed web app in Step 2 is the recommended route.

## Your data
Cases and settings are saved on this device, in the browser profile the app was installed from. Clearing browser data or uninstalling can erase them. Use Settings, Export case, regularly, and keep the files. Nothing is sent anywhere unless you use AI reading and send an image or text to an AI provider.

## Keeping it compliant
1. After every Budget, Spring Statement and Finance Act, update the rate pack in Settings and press Mark reviewed today.
2. Tick each rule on the Rules register tab only after you have checked it against the legislation or gov.uk. The authority references were compiled by an AI model: treat them as leads.
3. Export the rate pack and keep each version, for example `rates-2027-04-06.json`.
4. Keep 10 or more completed computations with their approved figures and re-run them after every change.
5. A qualified person reviews every computation before it is filed or sent to a client.
6. Read the Not covered list on the Rules register tab. If any item applies, finish the computation by hand.
