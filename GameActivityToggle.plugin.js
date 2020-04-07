/**
 * @name GameActivityToggle
 * @version 1.0.0
 * @description Simple plugin that adds the \"display game activity\" setting
 * on the home toolbar so you can toggle it easier when you don't want your friends knowing how much you play video games.
 *
 * @authorLink https://github.com/Egrodo
 * @source https://github.com/Egrodo/DiscordPlugins/blob/master/GameActivityToggle.plugin.js
 */

const enabledIcon =
  '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" width="20" height="20" xml:space="preserve"><style type="text/css">.st0{fill:#B9BBBE;}</style><g><path class="st0" d="M20.8,7.7c-0.6-1.2-1.8-1.9-3.1-1.9H6.3C5,5.7,3.8,6.5,3.2,7.6l-2.8,5.8c0,0,0,0,0,0C-0.3,15.1,0.4,17,2,17.8L2.3,18C4,18.7,5.9,18,6.7,16.4l0.1-0.3c0.3-0.6,0.9-1,1.6-1h7.1c0.7,0,1.3,0.4,1.6,1l0.1,0.3c0.8,1.6,2.7,2.4,4.4,1.6l0.3-0.1c1.6-0.8,2.3-2.7,1.6-4.4L20.8,7.7z M8.6,10.5c0,0.2-0.2,0.4-0.4,0.4H7.3c-0.2,0-0.4,0.2-0.4,0.4v0.9c0,0.2-0.2,0.4-0.4,0.4H5.7c-0.2,0-0.4-0.2-0.4-0.4v-0.9c0-0.2-0.2-0.4-0.4-0.4c0,0,0,0,0,0H4.1c-0.2,0-0.4-0.2-0.4-0.4V9.7c0-0.2,0.2-0.4,0.4-0.4h0.9c0.2,0,0.4-0.2,0.4-0.4c0,0,0,0,0,0V8.1c0-0.2,0.2-0.4,0.4-0.4h0.8C6.8,7.7,7,7.9,7,8.1V9c0,0.2,0.2,0.4,0.4,0.4h0.9c0.2,0,0.3,0.2,0.3,0.4V10.5z M15.6,10.9c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8c0,0,0,0,0,0c0.4,0,0.8,0.3,0.8,0.8C16.4,10.5,16.1,10.9,15.6,10.9z M17.2,7.7C17.2,7.7,17.2,7.7,17.2,7.7c0.4,0,0.8,0.3,0.8,0.8c0,0,0,0,0,0c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8S16.8,7.7,17.2,7.7z M18,11.7L18,11.7C18,11.7,18,11.7,18,11.7c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8c0,0,0,0,0,0C17.7,10.9,18,11.3,18,11.7C18,11.7,18,11.7,18,11.7L18,11.7C18,11.7,18,11.7,18,11.7C18,11.7,18,11.7,18,11.7z M18.9,10.9c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8c0,0,0,0,0,0c0.4,0,0.8,0.3,0.8,0.8C19.6,10.5,19.3,10.9,18.9,10.9z"/><polygon points="19.3,11.2 19.3,11.2 19.3,11.2 "/><polygon points="19.3,11.2 19.3,11.2 19.3,11.2 "/></g></svg>';
const disabledIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" width="20" height="20" xml:space="preserve"><style type="text/css">.st0{fill:#B9BBBE;}.st1{fill:#F04747;}</style><g><path class="st0" d="M17.7,5.7h-0.8L4.4,18.1c1-0.2,1.9-0.8,2.3-1.8l0.1-0.3c0.3-0.6,0.9-1,1.6-1h1.9l4.7-4.6v0c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.4,0.3-0.8,0.8-0.8c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0.1l0.5-0.5c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.4,0.3-0.8,0.8-0.8c0.1,0,0.3,0,0.4,0.1l1.7-1.7C18.8,5.8,18.3,5.7,17.7,5.7z M23.5,13.4l-2.8-5.8c0,0,0-0.1-0.1-0.1l-1.8,1.8c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.7l-0.8,0.8c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.7L13.1,15h2.4c0.7,0,1.3,0.4,1.6,1l0.1,0.3c0.8,1.6,2.7,2.3,4.4,1.6l0.3-0.1C23.6,17,24.3,15,23.5,13.4z M6.3,5.7C5,5.7,3.8,6.4,3.3,7.6l-2.8,5.8c0,0,0,0,0,0C-0.3,15,0.4,16.9,2,17.7L14,5.7H6.3z M8.2,10.8H7.3c-0.2,0-0.4,0.2-0.4,0.3v0.9c0,0.2-0.2,0.3-0.3,0.3H5.7c-0.2,0-0.3-0.2-0.3-0.3v-0.9c0-0.2-0.2-0.3-0.4-0.3H4.1c-0.2,0-0.4-0.2-0.4-0.4V9.6c0-0.2,0.2-0.4,0.4-0.4H5c0.2,0,0.4-0.2,0.4-0.4V8c0-0.2,0.2-0.4,0.4-0.4h0.8C6.8,7.7,7,7.8,7,8v0.9c0,0.2,0.2,0.4,0.4,0.4h0.9c0.2,0,0.3,0.2,0.3,0.4v0.8C8.6,10.7,8.4,10.8,8.2,10.8z"/><polygon points="19.3,11.1 19.3,11.1 19.3,11.1 "/><polygon points="19.3,11.2 19.3,11.1 19.3,11.1 "/></g><polygon class="st1" points="22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 "/></svg>';

class GameActivityToggle {
  btnReference = null;
  tooltipReference = null;
  styleReference = null;
  gameActivity = false;

  constructor() {
    this.onToggle = this.onToggle.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.displayTooltip = this.displayTooltip.bind(this);
  }

  getName() {
    return 'Game Activity Toggle';
  }

  getDescription() {
    return 'Simple plugin that adds a "Display Game Activity" button on the main toolbar so you can toggle it easier.';
  }

  getVersion() {
    return '1.0.0';
  }

  getAuthor() {
    return 'egrodo';
  }

  load() {
    // On load check what game activity is currently set to.
    this.gameActivity = BdApi.findModuleByProps('guildPositions').showCurrentGame;
  }

  start() {
    // Use flexMarginReset prop to find the selector for the taskbar row.
    const selector = (BdApi.findModuleByProps('flexMarginReset', 'flex').flex || '').split(' ')[0];
    if (!selector) {
      console.error('GameActivityToggle failed to start up: Selector not found?');
      return;
    }

    // Create my custom button and prepend it to the toolbar row.
    const row = document.querySelector(`.${selector}`);
    this.btnReference = row.firstElementChild.cloneNode(true);
    this.btnReference.firstElementChild.innerHTML = this.gameActivity ? enabledIcon : disabledIcon;
    this.btnReference.id = 'GameActivityToggleBtn';
    this.btnReference.setAttribute('aria-label', 'Toggle Game Activity');
    this.btnReference.setAttribute('aria-checked', `${this.gameActivity ? 'true' : 'false'}`);
    this.btnReference.title = `Turn ${this.gameActivity ? 'off' : 'on'} game activity`;
    this.btnReference.addEventListener('click', this.onToggle);
    row.prepend(this.btnReference);

    // Also setup my recreated tooltip that matches Discord's style.
    const wrapperDiv = document.createElement('div');
    wrapperDiv.style.visibility = 'hidden';
    wrapperDiv.style.position = 'absolute';
    wrapperDiv.style.zIndex = '10000';
    wrapperDiv.style.pointerEvents = 'none';
    this.tooltipReference = wrapperDiv;
    const textWrapper = document.createElement('div');
    textWrapper.className = 'GameActivityToggle_TooltipTextBox';
    textWrapper.innerText = `Turn ${this.gameActivity ? 'off' : 'on'} game activity`;
    wrapperDiv.appendChild(textWrapper);

    this.btnReference.addEventListener('mouseenter', this.displayTooltip);
    this.btnReference.addEventListener('mouseleave', this.hideTooltip);

    // Add the css for the tooltip as a style element at the bottom of the document.
    this.styleReference = document.createElement('style');
    this.styleReference.innerHTML = `.GameActivityToggle_TooltipTextBox{transform: none; background-color: #000; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24); color: #dcddde; border-radius: 5px; font-family: inherit; pointer-events: none; font-weight: 500; font-size: 14px; line-height: 16px; padding: 8px 12px; max-width: 190px; -webkit-box-sizing: border-box; box-sizing: border-box; word-wrap: break-word; z-index: 1002;}.GameActivityToggle_TooltipTextBox::after{content: '';position: absolute; pointer-events: none;bottom: 0;left: 50%;width: 0;height: 0;border: 5px solid transparent;border-top-color: #000000;border-bottom: 0;margin-left: -5px;margin-bottom: -5px;}`;

    document.body.appendChild(wrapperDiv);
    document.head.appendChild(this.styleReference);
  }

  onToggle() {
    this.gameActivity = !this.gameActivity;
    BdApi.findModuleByProps('updateRemoteSettings').updateLocalSettings({ showCurrentGame: this.gameActivity });
    this.btnReference.firstElementChild.innerHTML = this.gameActivity ? enabledIcon : disabledIcon;
    this.btnReference.title = `Turn ${this.gameActivity ? 'off' : 'on'} game activity`;
    this.tooltipReference.firstElementChild.innerText = `Turn ${this.gameActivity ? 'off' : 'on'} game activity`;
    this.btnReference.setAttribute('aria-checked', `${this.gameActivity ? 'true' : 'false'}`);
    this.btnReference.addEventListener('click', this.onToggle);

    // Play the mute / unmute sound on toggle.
    if (this.gameActivity) {
      BdApi.findModuleByProps('playSound').playSound('unmute', 0.4);
    } else BdApi.findModuleByProps('playSound').playSound('mute', 0.4);
  }

  displayTooltip({ target }) {
    const { x, y } = target.getBoundingClientRect();
    const tooltipXPos = x + target.clientWidth / 2 - this.tooltipReference.offsetWidth / 2;
    const tooltipYPos = y - target.clientHeight - 8; // 8 being a constant amount of space to hover above the btn.

    this.tooltipReference.style.left = `${tooltipXPos}px`;
    this.tooltipReference.style.visibility = 'visible';
    this.tooltipReference.style.top = `${tooltipYPos}px`;

    this.tooltipReference.visibility = 'visible';
  }

  hideTooltip() {
    this.tooltipReference.style.visibility = 'hidden';
  }

  stop() {
    this.btnReference.removeEventListener('click', this.onToggle);
    this.btnReference.removeEventListener('mouseenter', this.displayTooltip);
    this.btnReference.removeEventListener('mouseleave', this.hideTooltip);
    this.btnReference.parentNode.removeChild(this.btnReference);
    this.tooltipReference.parentNode.removeChild(this.tooltipReference);
    this.styleReference.parentNode.removeChild(this.styleReference);
  }
}
