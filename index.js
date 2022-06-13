// Import stylesheets
import './style.css';

// Import ThoughtSpot SDK
import {
  init,
  LiveboardEmbed,
  Action,
  RuntimeFilterOp,
  EmbedEvent,
  AuthType,
  logout,
  HostEvent,
} from '@thoughtspot/visual-embed-sdk';

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/ 'http://localhost:3000/' /*param-end-hosturl*/,
  authType: AuthType.None,
  username: 'tsadmin',
});

// Instantiate class for embedding a Liveboard
const embed = new LiveboardEmbed('#embed', {
  frameParams: { height: '100vh' },
  disabledActions: [Action.ShowUnderlyingData, Action.Pin],
  liveboardId:
    '33248a57-cc70-4e39-9199-fb5092283381' /*param-end-liveboardFullHeight*/ /*param-end-modifyActions*/ /*param-end-liveboardId*/ /*param-end-runtimeFilters*/,
  /*param-start-liveboardFullHeight*/
  /*param-start-modifyActions*/
  /*param-start-liveboardId*/
});

embed.render();

document.getElementById('button1').addEventListener('click', () => {
  embed.trigger('pin-730496d6-6903-4601-937e-2c691821af3c');
});
